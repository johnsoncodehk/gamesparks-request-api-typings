declare namespace SparkRequests {
    /**
     * Allows a Twitch account to be used as an authentication mechanism.
     * Once authenticated the platform can determine the current players details from the Twitch platform and store them within GameSparks.
     * If the Twitch user is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitch user is not already registered with the game, the Twitch user will be linked to the current player.
     * If the current player has not authenticated and the Twitch user is not known, a new player will be created using the Twitch details and the session will be authenticated against the new player.
     * If the Twitch user is already known, the session will switch to being the previously created user.
     */
    class TwitchConnectRequest extends _Request<_TwitchConnectResponse> {
        /**
         * The access token is used by the client to make authenticated requests on behalf of the end user.
         * @Required No
         */
        accessToken: string;
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         * @Required No
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         * @Required No
         */
        errorOnSwitch: boolean;
        /**
         * An optional segment configuration for this request.
         * @Required No
         */
        segments: JSON;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         * @Required No
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         * @Required No
         */
        syncDisplayName: boolean;
    }
    class _TwitchConnectResponse extends _Response {
        /**
         * 44b297a8-162a-4220-8c14-dad9a1946ad2
         */
        authToken: string;
        /**
         * The player’s display name
         */
        displayName: string;
        /**
         * Indicates whether the player was created as part of this request
         */
        newPlayer: boolean;
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
        /**
         * A summary of the player that would be switched to.  Only returned as part of an error response for a request where automatic switching is disabled.
         */
        switchSummary: Player;
        /**
         * The player’s id
         */
        userId: string;
    }
}
