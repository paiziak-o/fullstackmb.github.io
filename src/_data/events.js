import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
    const eventsApiUrl = "https://fullstackmbapi.azurewebsites.net/api/events";

    const data = await EleventyFetch(eventsApiUrl, {
        duration: "1d",
        type: "json"
    });

    return data.events;
}