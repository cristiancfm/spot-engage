<template>
  <v-list lines="two">
    <v-list-subheader>{{ $t("venue.playingQueue") }}</v-list-subheader>
    <v-list-item>
      <v-row justify="space-between" align="center">
        <v-col>
          <v-list-item-title>{{
            $t("venueSettings.spotifyLogin.title")
          }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("venueSettings.spotifyLogin.description") }}
          </v-list-item-subtitle>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" variant="flat" @click="spotifyLogin">{{
            $t("login")
          }}</v-btn>
        </v-col>
      </v-row>
    </v-list-item>
    <v-list-item>
      <v-row justify="space-between" align="center">
        <v-col>
          <v-list-item-title>{{
            $t("venueSettings.limitTracks.title")
          }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("venueSettings.limitTracks.description") }}
          </v-list-item-subtitle>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="black"
            variant="flat"
            @click="limitTracksDialog = true"
            >{{ $t("venueSettings.limitTracks.button") }}</v-btn
          >
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
  <v-list lines="two">
    <v-list-subheader>{{ $t("general") }}</v-list-subheader>
    <v-list-item>
      <v-row justify="space-between" align="center">
        <v-col>
          <v-list-item-title>{{ $t("venueSettings.accessCode.title") }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("venueSettings.accessCode.description") }}
          </v-list-item-subtitle>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="black"
            variant="flat"
            @click="accessCodeDialog = true"
            >{{ $t("venueSettings.accessCode.button") }}</v-btn
          >
        </v-col>
      </v-row>
    </v-list-item>
    <v-list-item>
      <v-row justify="space-between" align="center">
        <v-col>
          <v-list-item-title>{{
            $t("venueSettings.modifyVenue.title")
          }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("venueSettings.modifyVenue.description") }}
          </v-list-item-subtitle>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="black"
            variant="flat"
            @click="modifyVenueDialog = true"
            >{{ $t("venueSettings.modifyVenue.button") }}</v-btn
          >
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
  <modify-venue-dialog
    :dialog="modifyVenueDialog"
    :venue="venue"
    @update:dialog="modifyVenueDialog = false"
  />
  <limit-tracks-dialog
    :dialog="limitTracksDialog"
    :tracks-limit="venue.tracksLimit"
    @update:dialog="limitTracksDialog = false"
  />
  <access-code-dialog
    :dialog="accessCodeDialog"
    :access-code="venue.accessCode"
    @update:dialog="accessCodeDialog = false"
  />
</template>

<script>
import { mapStores } from "pinia";
import { useSpotifyStore } from "~/store/spotify.js";
import { redirectToAuthCodeFlow } from "~/utils/spotifyAuth.js";
import AccessCodeDialog from "~/components/dialogs/accessCodeDialog.vue";
import LimitTracksDialog from "~/components/dialogs/limitTracksDialog.vue";
import ModifyVenueDialog from "~/components/dialogs/modifyVenueDialog.vue";

export default {
  components: { ModifyVenueDialog, LimitTracksDialog, AccessCodeDialog },
  props: {
    venue: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      modifyVenueDialog: false,
      limitTracksDialog: false,
      accessCodeDialog: false,
    };
  },
  computed: {
    ...mapStores(useSpotifyStore),
  },
  methods: {
    async spotifyLogin() {
      const clientId = this.spotifyStore.clientId;
      const redirectUri = `${import.meta.env.VITE_APP_URL}/venue/1`;
      await redirectToAuthCodeFlow(clientId, redirectUri);
    },
  },
};
</script>
