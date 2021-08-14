import { IconGithub } from "../icons/IconGithub"


function RightNav() {
    return (
        <div className="flex flex-col ml-5 pt-10">
            <div className="relative">
                <a target="_blank" rel="noreferrer" href="https://github.com/usotsuki777/finishedlife444clone">
                    <IconGithub />
                </a>


            </div>
        </div>
    )
}

export { RightNav }