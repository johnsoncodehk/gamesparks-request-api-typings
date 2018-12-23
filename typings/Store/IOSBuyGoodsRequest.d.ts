declare namespace SparkRequests {
    /**
     * Processes a transaction receipt from an App Store in app purchase.
     * The GameSparks platform will validate the receipt with Apple and process the response. The transaction_id in the response will be recorded and the request will be rejected if the transaction_id has previously been processed, this prevents replay attacks.
     * Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the product_id in the response with the 'IOS Product ID’ configured against the virtual good.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * verificationError | 1 | No matching virtual good can be found
     * verificationError | 2 | The Apple servers failed to verify the receipt
     * verificationError | 3 | There was an error connecting to the Apple server
     * verificationError | 5 | The transaction_id has been processed before
     * 
     * @example
     * var request = new SparkRequests.IOSBuyGoodsRequest();
     * request.currencyCode = ...;
     * request.receipt = ...;
     * request.sandbox = ...;
     * request.subUnitPrice = ...;
     * request.uniqueTransactionByPlayer = ...;
     * var response = request.Send();
     * 
     * var boughtItems = response.boughtItems; 
     * var currenciesAdded = response.currenciesAdded; 
     * var currency1Added = response.currency1Added; 
     * var currency2Added = response.currency2Added; 
     * var currency3Added = response.currency3Added; 
     * var currency4Added = response.currency4Added; 
     * var currency5Added = response.currency5Added; 
     * var currency6Added = response.currency6Added; 
     * var currencyConsumed = response.currencyConsumed; 
     * var currencyShortCode = response.currencyShortCode; 
     * var currencyType = response.currencyType; 
     * var invalidItems = response.invalidItems; 
     * var scriptData = response.scriptData; 
     * var transactionIds = response.transactionIds; 
     */
    class IOSBuyGoodsRequest extends _Request<_IOSBuyGoodsResponse> {
        /**
         * The ISO 4217 currency code representing the real-world currency used for this transaction.
         * @Required No
         */
        currencyCode: string;
        /**
         * The receipt obtained from SKPaymentTransaction. transactionReceipt
         * @Required Yes
         */
        receipt: string;
        /**
         * Should the sandbox account be used
         * @Required No
         */
        sandbox: boolean;
        /**
         * The price of this purchase
         * @Required No
         */
        subUnitPrice: number;
        /**
         * If set to true, the transactionId from this receipt will not be globally valdidated, this will mean replays between players are possible.
         * @Required No
         */
        uniqueTransactionByPlayer: boolean;
    }
    /**
     * A response containing details of the bought items
     */
    class _IOSBuyGoodsResponse extends _Response {
        /**
         * A JSON object containing details of the bought items
         */
        boughtItems: Boughtitem[];
        /**
         * An object containing the short code and amount added for each currency
         */
        currenciesAdded: JSON;
        /**
         * How much currency type 1 was added
         */
        currency1Added: number;
        /**
         * How much currency type 2 was added
         */
        currency2Added: number;
        /**
         * How much currency type 3 was added
         */
        currency3Added: number;
        /**
         * How much currency type 4 was added
         */
        currency4Added: number;
        /**
         * How much currency type 5 was added
         */
        currency5Added: number;
        /**
         * How much currency type 6 was added
         */
        currency6Added: number;
        /**
         * For a buy with currency request, how much currency was used
         */
        currencyConsumed: number;
        /**
         * For a buy with currency request, the short code of the currency used
         */
        currencyShortCode: string;
        /**
         * For a buy with currency request, which currency type was used
         */
        currencyType: number;
        /**
         * A list of invalid items for this purchase (if any). This field is populated only for store buys
         */
        invalidItems: string[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * The list of transactionIds, for this purchase, if they exist. This field is populated only for store buys
         */
        transactionIds: string[];
    }
}
