// components/Audio.tsx

function Audio({ path }: { path: string }) {

    return (
        <audio controls>
            <source src={path} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    )

}

export { Audio }