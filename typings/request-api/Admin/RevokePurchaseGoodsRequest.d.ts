declare namespace SparkRequests {
    /**
     * Revokes the purchase of a good. The items aquired will be removed from remaining items of the player.
     * 
     * ### Error Codes
     * Key | Value | Description
     * :- | :- | :-
     * transactionIds | REQUIRED | The transactionIds is missing
     * storeType | REQUIRED | The storeType is missing
     * playerId | REQUIRED | The playerId is missing
     * 
     * @example
     * var request = new SparkRequests.RevokePurchaseGoodsRequest();
     * request.playerId = ...;
     * request.storeType = ...;
     * request.transactionIds = ...;
     * var response = request.Send();
     * 
     * var revokedGoods = response.revokedGoods; 
     * var scriptData = response.scriptData; 
     */
    class RevokePurchaseGoodsRequest extends _Request<_RevokePurchaseGoodsResponse> {
        /**
         * The playerId for which to revoke the transaction
         * @Required Yes
         */
        playerId: string;
        /**
         * The store type for which to revoke these transactions
         * @Required Yes
         */
        storeType: string;
        /**
         * The list of transactionIds to revoke
         * @Required Yes
         */
        transactionIds: string[];
    }
    /**
     * A response containing details of the revoked items
     */
    class _RevokePurchaseGoodsResponse extends _Response {
        /**
         * The map of revoked goods
         */
        revokedGoods: JSON;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
