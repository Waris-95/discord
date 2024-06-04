export const getChannelMessages = async (channelId) => {
    const res = await fetch(`/api/channels/${channelId}/messages`, {
        headers: { 
            "Content-Type": "application/json",
        },
    }).then(res => res.json())
    console.log("TEST: ", res)
    return res
}