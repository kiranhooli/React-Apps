export const selectedSong = (song) => {
    //return action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}