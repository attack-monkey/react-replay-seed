export const exception = messageInput => {
    const messageOutput = (
        typeof messageInput === 'string' ? messageInput : 'Unknown Error'
    )
    throw new Error(messageOutput)
}