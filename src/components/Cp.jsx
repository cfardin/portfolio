import { useEffect, useState } from "react";
import { FaCode, FaTrophy, FaMedal, FaLaptopCode } from "react-icons/fa";
import codeforcesLogo from './../assets/codeforces.png';
import codechefLogo from './../assets/codechef.png';
import leetcodeLogo from './../assets/leetcode.png';

const CF_HANDLE = "itsfardin";
const CC_HANDLE = "cfardin51";
const LC_HANDLE = "c_fardin";

const Cp = () => {
    const [cf, setCf] = useState(null);
    const [cc, setCc] = useState(null);
    const [lc, setLc] = useState(null);

    useEffect(() => {
        // Codeforces
        fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`)
            .then((res) => res.json())
            .then((data) => {
                const u = data.result[0];
                setCf({
                    rating: u.rating,
                    maxRating: u.maxRating,
                    rank: u.rank,
                });
            })
            .catch(console.error);

        // Codeforces solved count (unique problems from submissions)
        fetch(`https://codeforces.com/api/user.status?handle=${CF_HANDLE}`)
            .then((res) => res.json())
            .then((data) => {
                const solvedSet = new Set();
                data.result.forEach((sub) => {
                    if (sub.verdict === "OK") {
                        solvedSet.add(
                            `${sub.problem.contestId}-${sub.problem.index}`,
                        );
                    }
                });
                setCf((prev) => ({ ...prev, solved: solvedSet.size }));
            })
            .catch(console.error);

        // Codeforces contests count
        // fetch(`https://codeforces.com/api/user.rating?handle=${CF_HANDLE}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setCf((prev) => ({ ...prev, contests: data.result.length }));
        //     })
        //     .catch(console.error);
        fetch(`https://codeforces.com/api/user.status?handle=${CF_HANDLE}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Total submissions:", data.result.length);
                const solvedSet = new Set();
                data.result.forEach((sub) => {
                    if (sub.verdict === "OK") {
                        solvedSet.add(
                            `${sub.problem.contestId}-${sub.problem.index}`,
                        );
                    }
                });
                console.log("Unique solved:", solvedSet.size);
                setCf((prev) => ({ ...prev, solved: solvedSet.size }));
            });

        // CodeChef
        fetch(`https://codechef-stats.tashif.codes/profile/${CC_HANDLE}`)
            .then((res) => res.json())
            .then((data) => {
                const p = data.profile;
                setCc({
                    rating: p.currentRating,
                    maxRating: p.highestRating,
                    stars: p.stars,
                    solved: p.totalSolved,
                    globalRank: p.globalRank,
                });
            })
            .catch(console.error);

        // LeetCode
        fetch(`https://alfa-leetcode-api.onrender.com/${LC_HANDLE}/solved`)
            .then((res) => {
                if (!res.ok) throw new Error(`Status ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log("LC DATA:", data);
                setLc({
                    total: parseInt(data.easySolved) + parseInt(data.mediumSolved) + parseInt(data.hardSolved),
                    easy: data.easySolved,
                    medium: data.mediumSolved,
                    hard: data.hardSolved,
                });
            })
            .catch((err) => console.error("LC FETCH ERROR:", err));
    }, []);

    const totalSolved = (cf?.solved || 0) + (cc?.solved || 0) + (lc?.total || 0);
    const totalContests = cf?.contests || 70;

    const cardClass ="bg-[#0f1729] border border-gray-700 rounded-sm p-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:border-white";

    return (
        <div id="cp" className="max-w-7xl mx-5 sm:mx-auto pt-10 md:pt-30 my-40">
            <div className="flex flex-col gap-4 pb-2 mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2 border-b w-fit pb-2 text-white">
                    <FaLaptopCode /> Competitive Programming
                </h2>
                <p className="text-xl text-gray-300">Sharpening problem-solving skills through algorithms, data structures, and competitive challenges.</p>
            </div>
           

            {/* Top summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className={cardClass}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#0b111f] p-3 rounded-lg">
                            <FaCode className=" text-xl" />
                        </div>
                        <span className="text-gray-300 font-medium">
                            Problems Solved
                        </span>
                    </div>
                    <p className="text-4xl font-bold ">
                        {totalSolved}
                        <span className="text-2xl">+</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        Across Codeforces, CodeChef & LeetCode
                    </p>
                </div>

                <div className={cardClass}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#1a2436] p-3 rounded-lg">
                            <FaTrophy className=" text-xl" />
                        </div>
                        <span className="text-gray-300 font-medium">
                            Contests Participated
                        </span>
                    </div>
                    <p className="text-4xl font-bold">
                        {totalContests}
                        <span className="text-2xl">+</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        Including onsite and online competitions
                    </p>
                </div>
            </div>

            {/* Platform cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Codeforces */}
                <div className={cardClass}>
                    <a href="https://codeforces.com/profile/itsfardin" target="blank" className="flex justify-between items-center">
                        <h3 className="text-white font-semibold text-lg">
                            Codeforces
                        </h3>
                        <img className="" src={codeforcesLogo} alt="codeforces" width={40} height={50} />
                    </a>
                    
                    <p className="text-green-400 font-medium mb-4 capitalize">
                        {cf?.rank || "..."}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-[#1a2436] rounded-lg p-2 text-center">
                            <p className="text-gray-400 text-[10px]">
                                Max Rat...
                            </p>
                            <p className="text-white font-bold text-sm">
                                {cf?.maxRating ?? "-"}
                            </p>
                        </div>
                        <div className="bg-[#1a2436] rounded-lg p-2 text-center">
                            <p className="text-gray-400 text-[10px]">Solved</p>
                            <p className="text-white font-bold text-sm">
                                {cf?.solved ?? "-"}
                            </p>
                        </div>
                        <div className="bg-[#1a2436] rounded-lg p-2 text-center">
                            <p className="text-gray-400 text-[10px]">
                                Contests
                            </p>
                            <p className="text-white font-bold text-sm">
                                {cf?.contests ?? "-"}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#2a2010] border border-yellow-700/40 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2 text-yellow-500 text-sm">
                            <FaMedal /> Rating
                        </div>
                        <span className="text-yellow-400 font-bold text-sm">
                            {cf?.rating ?? "-"}
                        </span>
                    </div>
                </div>

                {/* CodeChef */}
                <div className={cardClass}>
                    <a href="https://www.codechef.com/users/cfardin51" target="blank" className="flex justify-between items-center pb-3">
                        <h3 className="text-white font-semibold text-lg">
                        CodeChef
                        </h3>
                        <img src={codechefLogo} alt="codechef" width={50} height={50} />
                    </a>
                    
                    <p className="text-yellow-400 font-medium mb-4">
                        {cc?.stars || "..."}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-[#1a2436] rounded-lg p-2 text-center">
                            <p className="text-gray-400 text-[10px]">
                                Max Rat...
                            </p>
                            <p className="text-white font-bold text-sm">
                                {cc?.maxRating ?? "-"}
                            </p>
                        </div>
                        <div className="bg-[#1a2436] rounded-lg p-2 text-center">
                            <p className="text-gray-400 text-[10px]">Solved</p>
                            <p className="text-white font-bold text-sm">
                                {cc?.solved ?? "-"}
                            </p>
                        </div>
                        <div className="bg-[#1a2436] rounded-lg p-2 text-center">
                            <p className="text-gray-400 text-[10px]">Rating</p>
                            <p className="text-white font-bold text-sm">
                                {cc?.rating ?? "-"}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#2a2010] border border-yellow-700/40 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2 text-yellow-500 text-sm">
                            <FaMedal /> Global Rank
                        </div>
                        <span className="text-yellow-400 font-bold text-sm">
                            {cc?.globalRank ?? "-"}
                        </span>
                    </div>
                </div>

                {/* LeetCode - same style, easy/medium/hard */}
                <div className={cardClass}>
                    <a href="https://leetcode.com/u/c_fardin/" target="blank" className="flex justify-between items-center mb-3">
                        <h3 className="text-white font-semibold text-lg">
                            LeetCode
                        </h3>
                        <img src={leetcodeLogo} alt="leetcode" width={40} height={50} />
                    </a>
                    
                    <p className="text-blue-400 font-medium mb-4">
                        Total: {lc?.total ?? "..."}
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-[#1a2436] rounded-lg px-4 py-3">
                            <span className="text-green-400">Easy</span>
                            <span className="text-white font-bold">
                                {lc?.easy ?? "-"}
                            </span>
                        </div>
                        <div className="flex items-center justify-between bg-[#1a2436] rounded-lg px-4 py-3">
                            <span className="text-yellow-400">Medium</span>
                            <span className="text-white font-bold">
                                {lc?.medium ?? "-"}
                            </span>
                        </div>
                        <div className="flex items-center justify-between bg-[#1a2436] rounded-lg px-4 py-3">
                            <span className="text-red-400">Hard</span>
                            <span className="text-white font-bold">
                                {lc?.hard ?? "-"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cp;
