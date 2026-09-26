import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
    return (
        <div className="mt-10 overflow-x-auto">
            <GitHubCalendar username="cfardin" />
        </div>
    );
};

export default GithubActivity;