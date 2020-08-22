declare namespace SparkRequests {
    /**
     * Returns a list of all leaderboards configured in the game.
     * 
     * @example
     * var request = new SparkRequests.ListLeaderboardsRequest();
     * var response = request.Send();
     * 
     * var leaderboards = response.leaderboards; 
     * var scriptData = response.scriptData; 
     */
    class ListLeaderboardsRequest extends _Request<_ListLeaderboardsResponse> {
    }
    /**
     * A response containing a list of all leaderboards configured in the game.
     */
    class _ListLeaderboardsResponse extends _Response {
        /**
         * A list of JSON object containing leaderboard meta data
         */
        leaderboards: Leaderboard[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}
