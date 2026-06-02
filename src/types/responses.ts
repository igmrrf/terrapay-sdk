// Auto-generated response codes from TerraPay Documentation

// ============================================================================
// 1. Remit Response Codes
// These codes pertain to the actual execution and status of a remittance.
// ============================================================================
export enum RemitResponseCode {
  /** Remit Success */
  REMIT_SUCCESS = '3000',
  /** Remit Acknowledged, status PENDING */
  REMIT_ACKNOWLEDGED_STATUS_PENDING = '3050',
  /** Transaction request should be current date. */
  TRANSACTION_REQUEST_SHOULD_BE_CURRENT_DATE = '3001',
  /** Beneficiary Validation failed */
  BENEFICIARY_VALIDATION_FAILED = '3002',
  /** Transaction id is invalid */
  TRANSACTION_ID_IS_INVALID = '3003',
  /** Duplicate transaction Id */
  DUPLICATE_TRANSACTION_ID = '3004',
  /** Quote and Remit parameters do not match */
  QUOTE_AND_REMIT_PARAMETERS_DO_NOT_MATCH = '3005',
  /** Sender KYC validation failed */
  SENDER_KYC_VALIDATION_FAILED = '3006',
  /** Beneficiary KYC validation failed */
  BENEFICIARY_KYC_VALIDATION_FAILED = '3007',
  /** Quote expired */
  QUOTE_EXPIRED = '3008',
  /** Failed to process quote request */
  FAILED_TO_PROCESS_QUOTE_REQUEST = '3009',
  /** Mandatory KYC parameter check failed */
  MANDATORY_KYC_PARAMETER_CHECK_FAILED = '3010',
  /** Invalid Fx Rate */
  INVALID_FX_RATE = '3011',
  /** Corridor validation failed */
  CORRIDOR_VALIDATION_FAILED = '3022',
  /** Possible duplicate transaction received within configured time. */
  POSSIBLE_DUPLICATE_TRANSACTION_RECEIVED_WITHIN_CONFIGURED_TIME = '3030',
  /** Connection timeout while connecting to destination partner */
  CONNECTION_TIMEOUT_WHILE_CONNECTING_TO_DESTINATION_PARTNER = '3031',
  /** Remit failed */
  REMIT_FAILED = '3032',
  /** Remit Failed. Insufficient funds */
  REMIT_FAILED_INSUFFICIENT_FUNDS = '3049',
  /** Beneficiary daily transaction count limit reached */
  BENEFICIARY_DAILY_TRANSACTION_COUNT_LIMIT_REACHED = '3060',
  /** Beneficiary weekly transaction count limit reached */
  BENEFICIARY_WEEKLY_TRANSACTION_COUNT_LIMIT_REACHED = '3061',
  /** Beneficiary monthly transaction count limit reached */
  BENEFICIARY_MONTHLY_TRANSACTION_COUNT_LIMIT_REACHED = '3062',
  /** Beneficiary daily transaction amount limit reached. */
  BENEFICIARY_DAILY_TRANSACTION_AMOUNT_LIMIT_REACHED = '3072',
  /** Beneficiary weekly transaction amount limit reached. */
  BENEFICIARY_WEEKLY_TRANSACTION_AMOUNT_LIMIT_REACHED = '3073',
  /** Beneficiary monthly transaction amount limit reached */
  BENEFICIARY_MONTHLY_TRANSACTION_AMOUNT_LIMIT_REACHED = '3074',
  /** Sending Partner Min allowed amount check failed. */
  SENDING_PARTNER_MIN_ALLOWED_AMOUNT_CHECK_FAILED = '3075',
  /** Sending Partner Max allowed amount check failed. */
  SENDING_PARTNER_MAX_ALLOWED_AMOUNT_CHECK_FAILED = '3076',
  /** Receiving Partner Min allowed amount check failed. */
  RECEIVING_PARTNER_MIN_ALLOWED_AMOUNT_CHECK_FAILED = '3077',
  /** Receiving Partner Max allowed amount check failed. */
  RECEIVING_PARTNER_MAX_ALLOWED_AMOUNT_CHECK_FAILED = '3078',
  /** Sender Min allowed amount check failed. */
  SENDER_MIN_ALLOWED_AMOUNT_CHECK_FAILED = '3079',
  /** Sender Max allowed amount check failed. */
  SENDER_MAX_ALLOWED_AMOUNT_CHECK_FAILED = '3080',
  /** Receiver Min allowed amount check failed. */
  RECEIVER_MIN_ALLOWED_AMOUNT_CHECK_FAILED = '3081',
  /** Receiver Max allowed amount check failed. */
  RECEIVER_MAX_ALLOWED_AMOUNT_CHECK_FAILED = '3082',
  /** Credit Failed. Msisdn not found. */
  CREDIT_FAILED_MSISDN_NOT_FOUND = '3100',
  /** Bank Credit Failed. Invalid Account. */
  BANK_CREDIT_FAILED_INVALID_ACCOUNT = '3101',
  /** Bank Credit Failed. Bank Not Reachable. */
  BANK_CREDIT_FAILED_BANK_NOT_REACHABLE = '3102',
  /** Bank credit failed. Account name mismatch. */
  BANK_CREDIT_FAILED_ACCOUNT_NAME_MISMATCH = '3103',
  /** Bank credit failed. Transaction limit exceeded. */
  BANK_CREDIT_FAILED_TRANSACTION_LIMIT_EXCEEDED = '3104',
  /** Bank credit failed. Transaction not permitted. */
  BANK_CREDIT_FAILED_TRANSACTION_NOT_PERMITTED = '3105',
  /** Bank credit failed. Unknown Error. */
  BANK_CREDIT_FAILED_UNKNOWN_ERROR = '3106',
  /** Invalid Amount Limit. */
  INVALID_AMOUNT_LIMIT = '3107',
  /** Insufficient funds in the receiving partner account. */
  INSUFFICIENT_FUNDS_IN_THE_RECEIVING_PARTNER_ACCOUNT = '3109',
  /** Invalid Beneficiary Account */
  INVALID_BENEFICIARY_ACCOUNT = '3110',
  /** Beneficiary Account not Registered */
  BENEFICIARY_ACCOUNT_NOT_REGISTERED = '3111',
  /** Beneficiary Account Limit Reached. */
  BENEFICIARY_ACCOUNT_LIMIT_REACHED = '3113',
  /** Beneficiary Account Barred. */
  BENEFICIARY_ACCOUNT_BARRED = '3114',
  /** Beneficiary Account Inactive */
  BENEFICIARY_ACCOUNT_INACTIVE = '3115',
  /** Beneficiary Account Locked */
  BENEFICIARY_ACCOUNT_LOCKED = '3116',
  /** Transfer type not supported */
  TRANSFER_TYPE_NOT_SUPPORTED = '3117',
  /** Remit Failed - Max retry limit reached. */
  REMIT_FAILED_MAX_RETRY_LIMIT_REACHED = '3132',
  /** Sender KYC Sanctioned */
  SENDER_KYC_SANCTIONED = '3133',
  /** Beneficiary yearly transaction amount limit reached */
  BENEFICIARY_YEARLY_TRANSACTION_AMOUNT_LIMIT_REACHED = '3141',
  /** Transaction on hold due to compliance reason. */
  TRANSACTION_ON_HOLD_DUE_TO_COMPLIANCE_REASON = '3150',
  /** Remit failed */
  REMIT_FAILED_3202 = '3202',
  /** Reversal Pending */
  REVERSAL_PENDING = '3208',
  /** Invalid sort code */
  INVALID_SORT_CODE = '3210',
  /** Beneficiary Opt-in Pending */
  BENEFICIARY_OPT_IN_PENDING = '3211',
  /** Beneficiary Pending Cashout */
  BENEFICIARY_PENDING_CASHOUT = '3212',
  /** Beneficiary Pending Review */
  BENEFICIARY_PENDING_REVIEW = '3213',
  /** Beneficiary Pending Registration */
  BENEFICIARY_PENDING_REGISTRATION = '3214',
  /** Commercial Transaction */
  COMMERCIAL_TRANSACTION = '3215',
  /** Invalid Beneficiary contact details */
  INVALID_BENEFICIARY_CONTACT_DETAILS = '3216',
  /** Beneficiary Unresponsive */
  BENEFICIARY_UNRESPONSIVE = '3217',
  /** Beneficiary Pending Upgrade */
  BENEFICIARY_PENDING_UPGRADE = '3218',
  /** Beneficiary Pending Adjustment */
  BENEFICIARY_PENDING_ADJUSTMENT = '3219',
  /** Invalid UPI amount. */
  INVALID_UPI_AMOUNT = '3222',
  /** Transaction rejected at wallet operator. */
  TRANSACTION_REJECTED_AT_WALLET_OPERATOR = '3223',
  /** Transaction rejected due to compliance */
  TRANSACTION_REJECTED_DUE_TO_COMPLIANCE = '3224',
  /** Cancellation requested by the sender */
  CANCELLATION_REQUESTED_BY_THE_SENDER = '3225',
  /** Transaction rejected due to outage/downtime. */
  TRANSACTION_REJECTED_DUE_TO_OUTAGE_DOWNTIME = '3226',
  /** Duplicate PRI request */
  DUPLICATE_PRI_REQUEST = '3227',
  /** Remit acknowledged. Transaction is on hold due to a possible duplicate. */
  REMIT_ACKNOWLEDGED_TRANSACTION_IS_ON_HOLD_DUE_TO_A_POSSIBLE_DUPLICATE = '3251',
  /** Beneficiary document type is invalid */
  BENEFICIARY_DOCUMENT_TYPE_IS_INVALID = '3401',
  /** Sender document type is invalid */
  SENDER_DOCUMENT_TYPE_IS_INVALID = '3402',
  /** Account name is mismatch */
  ACCOUNT_NAME_IS_MISMATCH = '3403',
  /** Sender address is invalid */
  SENDER_ADDRESS_IS_INVALID = '3404',
  /** Beneficiary address is invalid */
  BENEFICIARY_ADDRESS_IS_INVALID = '3405',
  /** Transaction currency is invalid */
  TRANSACTION_CURRENCY_IS_INVALID = '3406',
  /** Beneficiary is under age */
  BENEFICIARY_IS_UNDER_AGE = '3407',
  /** Beneficiary has not accepted the automatic payment. */
  BENEFICIARY_HAS_NOT_ACCEPTED_THE_AUTOMATIC_PAYMENT = '3408',
}

// ============================================================================
// 2. Cancel Transaction Response Codes
// These codes pertain to canceling an initiated transaction.
// ============================================================================
export enum CancelResponseCode {
  /** Cancel Success */
  CANCEL_SUCCESS = '3033',
  /** Cannot Cancel. Credit already in process. */
  CANNOT_CANCEL_CREDIT_ALREADY_IN_PROCESS = '15001',
  /** Cannot Cancel. Transaction in Success state. */
  CANNOT_CANCEL_TRANSACTION_IN_SUCCESS_STATE = '15002',
  /** Cannot Cancel. Transaction in Fail state. */
  CANNOT_CANCEL_TRANSACTION_IN_FAIL_STATE = '15003',
  /** Cannot Cancel. Transaction not found. */
  CANNOT_CANCEL_TRANSACTION_NOT_FOUND = '15004',
  /** Transaction already in canceled state. */
  TRANSACTION_ALREADY_IN_CANCELED_STATE = '15005',
}

// ============================================================================
// 3. Reversal Transaction Response Codes
// These codes pertain to reversing a successful transfer.
// ============================================================================
export enum ReversalResponseCode {
  /** Reversal Success. */
  REVERSAL_SUCCESS = '16000',
  /** Reversal Failed. Transaction Not found. */
  REVERSAL_FAILED_TRANSACTION_NOT_FOUND = '16001',
  /** Reversal Rejected. */
  REVERSAL_REJECTED = '16002',
  /** Reversal Pending. */
  REVERSAL_PENDING = '16003',
  /** Reversal cannot be done at this stage */
  REVERSAL_CANNOT_BE_DONE_AT_THIS_STAGE = '16004',
  /** Reversal already raised. */
  REVERSAL_ALREADY_RAISED = '16005',
  /** Transaction already reversed. */
  TRANSACTION_ALREADY_REVERSED = '16006',
  /** Reverse cannot be done. Transaction is in failed state. */
  REVERSE_CANNOT_BE_DONE_TRANSACTION_IS_IN_FAILED_STATE = '16007',
}

// ============================================================================
// 4. Quote Response Codes (V1)
// These codes pertain to fetching Foreign Exchange (FX) rates.
// ============================================================================
export enum QuoteResponseCode {
  /** Quote Success */
  QUOTE_SUCCESS = '2000',
  /** Source amount is invalid */
  SOURCE_AMOUNT_IS_INVALID = '2001',
  /** Beneficiary MSISDN validation failed */
  BENEFICIARY_MSISDN_VALIDATION_FAILED = '2002',
  /** Failed to get Forex rate */
  FAILED_TO_GET_FOREX_RATE = '2003',
}

// ============================================================================
// 5. Quotations Response Codes (V2)
// These codes pertain to fetching Foreign Exchange (FX) rates using the V2 API.
// ============================================================================
export enum QuoteV2ResponseCode {
  /** Invalid scheme. */
  INVALID_SCHEME = '2011',
  /** Scheme or pan mandatory. */
  SCHEME_OR_PAN_MANDATORY = '2012',
  /** Scheme is not supported. */
  SCHEME_IS_NOT_SUPPORTED = '2013',
  /** Scheme mismatch. */
  SCHEME_MISMATCH = '2014',
}

// ============================================================================
// 6. Beneficiary Validation Responses
// These codes pertain to the Verification API, checking if an account exists.
// ============================================================================
export enum BeneficiaryValidationResponseCode {
  /** Beneficiary MSISDN Validation Success */
  BENEFICIARY_MSISDN_VALIDATION_SUCCESS = '6000',
  /** Corridor does not exists */
  CORRIDOR_DOES_NOT_EXISTS = '6001',
  /** Corridor inactive */
  CORRIDOR_INACTIVE = '6002',
  /** Beneficiary MSISDN blacklisted */
  BENEFICIARY_MSISDN_BLACKLISTED = '6003',
  /** Beneficiary validation failed */
  BENEFICIARY_VALIDATION_FAILED = '6004',
  /** Beneficiary Registered but not KYCed */
  BENEFICIARY_REGISTERED_BUT_NOT_KYCED = '6005',
  /** Beneficiary MSISDN not found */
  BENEFICIARY_MSISDN_NOT_FOUND = '6006',
  /** Beneficiary Suspended */
  BENEFICIARY_SUSPENDED = '6007',
  /** Beneficiary name does not match */
  BENEFICIARY_NAME_DOES_NOT_MATCH = '6008',
  /** Beneficiary validation failed. Request timed out at destination partner */
  BENEFICIARY_VALIDATION_FAILED_REQUEST_TIMED_OUT_AT_DESTINATION_PARTNER = '6009',
  /** Mandatory KYC parameter check failed */
  MANDATORY_KYC_PARAMETER_CHECK_FAILED = '6010',
  /** Validation Failed. Beneficiary must register or upgrade KYC Level to receive transactions */
  VALIDATION_FAILED_BENEFICIARY_MUST_REGISTER_OR_UPGRADE_KYC_LEVEL_TO_RECEIVE_TRANSACTIONS = '6011',
  /** Beneficiary KYC Verification Pending */
  BENEFICIARY_KYC_VERIFICATION_PENDING = '6012',
  /** Receiver Name Missing */
  RECEIVER_NAME_MISSING = '6013',
  /** Customer Not Registered */
  CUSTOMER_NOT_REGISTERED = '6014',
  /** Beneficiary Account is locked */
  BENEFICIARY_ACCOUNT_IS_LOCKED = '6017',
  /** Destination Partner Timed Out - Please retry. */
  DESTINATION_PARTNER_TIMED_OUT_PLEASE_RETRY = '6019',
  /** Validation Invalid MSISDN */
  VALIDATION_INVALID_MSISDN = '6020',
  /** Beneficiary Account Inactive */
  BENEFICIARY_ACCOUNT_INACTIVE = '6022',
  /** Provider code/bank subcode is missing */
  PROVIDER_CODE_BANK_SUBCODE_IS_MISSING = '6023',
  /** Provider code does not match operator network */
  PROVIDER_CODE_DOES_NOT_MATCH_OPERATOR_NETWORK = '6024',
  /** Invalid UPI ID format */
  INVALID_UPI_ID_FORMAT = '6025',
  /** Bank UPI Not Supported */
  BANK_UPI_NOT_SUPPORTED = '6026',
  /** Incorrect IFSC Code */
  INCORRECT_IFSC_CODE = '6027',
  /** Validation Penny Drop Service down */
  VALIDATION_PENNY_DROP_SERVICE_DOWN = '6028',
  /** Account cannot be validated */
  ACCOUNT_CANNOT_BE_VALIDATED = '6030',
  /** IMPS Node down */
  IMPS_NODE_DOWN = '6033',
  /** Unable to process request */
  UNABLE_TO_PROCESS_REQUEST = '6034',
  /** Invalid response from partner */
  INVALID_RESPONSE_FROM_PARTNER = '6035',
  /** Invalid sort code */
  INVALID_SORT_CODE = '6036',
  /** Beneficiary document type is invalid. */
  BENEFICIARY_DOCUMENT_TYPE_IS_INVALID = '6041',
  /** Beneficiary is under age. */
  BENEFICIARY_IS_UNDER_AGE = '6042',
  /** Beneficiary Account amount limit exceeded. */
  BENEFICIARY_ACCOUNT_AMOUNT_LIMIT_EXCEEDED = '6043',
  /** Sender does not comply with the partner's policies. */
  SENDER_DOES_NOT_COMPLY_WITH_THE_PARTNER_S_POLICIES = '6044',
  /** Receiver does not comply with the partner's policies. */
  RECEIVER_DOES_NOT_COMPLY_WITH_THE_PARTNER_S_POLICIES = '6045',
  /** Beneficiary has not accepted the automatic payment. */
  BENEFICIARY_HAS_NOT_ACCEPTED_THE_AUTOMATIC_PAYMENT = '6047',
  /** Destination bank not configured */
  DESTINATION_BANK_NOT_CONFIGURED = '6101',
  /** Invalid Bank Account Number */
  INVALID_BANK_ACCOUNT_NUMBER = '6102',
  /** Destination bank not reachable */
  DESTINATION_BANK_NOT_REACHABLE = '6103',
  /** Validation Failed at Destination Partner */
  VALIDATION_FAILED_AT_DESTINATION_PARTNER = '6104',
  /** BankSubCode is missing */
  BANKSUBCODE_IS_MISSING = '6105',
  /** Invalid PAN */
  INVALID_PAN = '6108',
}

// ============================================================================
// 7. Generic Response Codes & Messages
// General routing, structural validation, account statuses, and system errors.
// ============================================================================
export enum GeneralResponseCode {
  /** Invalid [propertyName] */
  INVALID_PROPERTYNAME = '1000',
  /** [propertyName] value should be between [minlength] to [maxlength] */
  PROPERTYNAME_VALUE_SHOULD_BE_BETWEEN_MINLENGTH_TO_MAXLENGTH = '1001',
  /** [propertyName] must be [length] */
  PROPERTYNAME_MUST_BE_LENGTH = '1002',
  /** Authentication failed. Username or Password is incorrect. */
  AUTHENTICATION_FAILED_USERNAME_OR_PASSWORD_IS_INCORRECT = '1003',
  /** Invalid parameters in the request */
  INVALID_PARAMETERS_IN_THE_REQUEST = '1004',
  /** Mandatory fields are missing */
  MANDATORY_FIELDS_ARE_MISSING = '1005',
  /** Request SHA256 checksum mismatch */
  REQUEST_SHA256_CHECKSUM_MISMATCH = '1006',
  /** Server is busy. Please do a status enquiry to check if your transactions reached TerraPay. */
  SERVER_IS_BUSY_PLEASE_DO_A_STATUS_ENQUIRY_TO_CHECK_IF_YOUR_TRANSACTIONS_REACHED_TERRAPAY = '1007',
  /** Source country not allowed */
  SOURCE_COUNTRY_NOT_ALLOWED = '1010',
  /** Destination country not allowed */
  DESTINATION_COUNTRY_NOT_ALLOWED = '1011',
  /** Source currency not allowed */
  SOURCE_CURRENCY_NOT_ALLOWED = '1012',
  /** Destination currency not allowed */
  DESTINATION_CURRENCY_NOT_ALLOWED = '1013',
  /** Source country inactive */
  SOURCE_COUNTRY_INACTIVE = '1014',
  /** Destination country inactive */
  DESTINATION_COUNTRY_INACTIVE = '1015',
  /** Failed to get destination partner */
  FAILED_TO_GET_DESTINATION_PARTNER = '1016',
  /** Source partner validity fail */
  SOURCE_PARTNER_VALIDITY_FAIL = '1017',
  /** Destination partner validity fail */
  DESTINATION_PARTNER_VALIDITY_FAIL = '1018',
  /** Source partner suspended */
  SOURCE_PARTNER_SUSPENDED = '1019',
  /** Destination partner suspended */
  DESTINATION_PARTNER_SUSPENDED = '1020',
  /** Source partner inactive */
  SOURCE_PARTNER_INACTIVE = '1021',
  /** Destination partner inactive */
  DESTINATION_PARTNER_INACTIVE = '1022',
  /** Corridor validity failed */
  CORRIDOR_VALIDITY_FAILED = '1023',
  /** Corridor Suspended */
  CORRIDOR_SUSPENDED = '1024',
  /** Source MSISDN not allowed. */
  SOURCE_MSISDN_NOT_ALLOWED = '1026',
  /** Source MSISDN Blacklisted. */
  SOURCE_MSISDN_BLACKLISTED = '1027',
  /** Destination MSISDN not allowed. */
  DESTINATION_MSISDN_NOT_ALLOWED = '1028',
  /** Destination MSISDN Blacklisted. */
  DESTINATION_MSISDN_BLACKLISTED = '1029',
  /** Corridor not exists */
  CORRIDOR_NOT_EXISTS = '1030',
  /** Source currency inactive */
  SOURCE_CURRENCY_INACTIVE = '1031',
  /** Destination currency inactive */
  DESTINATION_CURRENCY_INACTIVE = '1032',
  /** Invalid Transaction ID. */
  INVALID_TRANSACTION_ID = '1046',
  /** Destination Country Sanctioned. */
  DESTINATION_COUNTRY_SANCTIONED = '1061',
  /** Source Country Sanctioned. */
  SOURCE_COUNTRY_SANCTIONED = '1062',
  /** Routing Failed. */
  ROUTING_FAILED = '1073',
  /** Beneficiary name invalid. */
  BENEFICIARY_NAME_INVALID = '1603',
  /** Sender name invalid. */
  SENDER_NAME_INVALID = '1604',
}
