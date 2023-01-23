import type { ServerLoad } from "@sveltejs/kit";

export const load :ServerLoad = (() => {

    return {
        pageName: "İletişim1"
    }
}) as ServerLoad