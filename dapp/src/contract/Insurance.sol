// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract InsurancePolicy {
    address public admin;
    
    struct Policy {
        uint256 id;
        string policyName;
        string policyDetails;
        uint256 coverageAmount;
        uint256 premiumAmount;
        uint256 durationYears;
        bool isActive;
    }
    
    struct UserPolicy {
        uint256 policyId;
        uint256 lastPaymentTimestamp;
        bool isClaimed;
    }
    
    Policy[] public policies;
    mapping(address => UserPolicy[]) public userPolicies;
    mapping(uint256 => string) public deathCertificates; // Mapping to store IPFS hash of death certificates
    mapping(uint256 => bool) public claimApprovalStatus; // Mapping to store approval status of claims
    
    event PolicyAdded(uint256 id, string policyName, uint256 coverageAmount, uint256 durationYears);
    event PolicyBought(address indexed user, uint256 policyId);
    event PremiumPaid(address indexed user, uint256 policyId, uint256 amount);
    event ClaimInitiated(address indexed beneficiary, uint256 policyId, string ipfsHash);
    event ClaimApproved(address indexed beneficiary, uint256 policyId, uint256 amount);
    event FundsAdded(address indexed account, uint256 amount, address indexed admin); // Event for funds added to account
    
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }
    
    constructor() {
        admin = msg.sender;
    }
    
    function addPolicy(
        string memory _policyName,
        string memory _policyDetails,
        uint256 _coverageAmount,
        uint256 _premiumAmount,
        uint256 _durationYears
    ) external onlyAdmin {
        uint256 id = policies.length;
        policies.push(Policy(id, _policyName, _policyDetails, _coverageAmount, _premiumAmount, _durationYears, true));
        emit PolicyAdded(id, _policyName, _coverageAmount, _durationYears);
    }
    
    function buyPolicy(uint256 _policyId) external payable {
        require(_policyId < policies.length, "Policy ID does not exist");
        Policy memory policy = policies[_policyId];
        require(policy.isActive, "Policy is not active");
        require(msg.value >= policy.premiumAmount, "Insufficient payment");
        
        userPolicies[msg.sender].push(UserPolicy(_policyId, block.timestamp, false));
        emit PolicyBought(msg.sender, _policyId);
    }
    
    function payPremium(uint256 _policyId) external payable {
        require(_policyId < policies.length, "Policy ID does not exist");
        Policy memory policy = policies[_policyId];
        require(policy.isActive, "Policy is not active");
        
        // Check if user has bought this policy
        bool found = false;
        for (uint256 i = 0; i < userPolicies[msg.sender].length; i++) {
            if (userPolicies[msg.sender][i].policyId == _policyId) {
                found = true;
                break;
            }
        }
        require(found, "User has not bought this policy");
        
        require(block.timestamp >= userPolicies[msg.sender][_policyId].lastPaymentTimestamp + 30 days, "Premium already paid for this month");
        require(block.timestamp <= userPolicies[msg.sender][_policyId].lastPaymentTimestamp + policy.durationYears * 365 days, "Duration for paying premiums has ended");
        
        userPolicies[msg.sender][_policyId].lastPaymentTimestamp = block.timestamp;
        emit PremiumPaid(msg.sender, _policyId, policy.premiumAmount);
    }
    
    function uploadDeathCertificateAndClaimInsurance(uint256 _policyId, string memory _ipfsHash) external {
        require(_policyId < policies.length, "Policy ID does not exist");
        Policy memory policy = policies[_policyId];
        require(policy.isActive, "Policy is not active");
        require(!userPolicies[msg.sender][_policyId].isClaimed, "Claim has already been made for this policy");
        
        // Store death certificate on IPFS
        deathCertificates[_policyId] = _ipfsHash;
        
        emit ClaimInitiated(msg.sender, _policyId, _ipfsHash);
    }
    
    function approveClaim(uint256 _policyId) external onlyAdmin {
        require(_policyId < policies.length, "Policy ID does not exist");
        require(bytes(deathCertificates[_policyId]).length > 0, "No death certificate provided");
        
        // Additional verification steps can be added here
        
        // Approve the claim
        claimApprovalStatus[_policyId] = true;
        userPolicies[msg.sender][_policyId].isClaimed = true;
        
        // Transfer coverage amount to the beneficiary
        uint256 coverageAmount = policies[_policyId].coverageAmount;
        payable(msg.sender).transfer(coverageAmount);
        
        emit ClaimApproved(msg.sender, _policyId, coverageAmount);
    }

 function addFundsToContract() external payable onlyAdmin {
    // Emit an event to log the transaction
    emit FundsAdded(address(this), msg.value, msg.sender);
}
    function withdraw(uint256 amount) external onlyAdmin {
    require(amount <= address(this).balance, "Insufficient balance");
    payable(admin).transfer(amount);
}

    function getAllPolicies() external view returns (Policy[] memory) {
        return policies;
    }
    
    function getUserPolicies(address _user) external view returns (UserPolicy[] memory) {
        return userPolicies[_user];
    }
    
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}