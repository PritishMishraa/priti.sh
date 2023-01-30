import TimeBox from "./TimeBox";
import TimeBoxComment from "./TimeBoxComment";

export default function Timeline() {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-600">
            <TimeBox
                text="Longest Streak on LeetCode - "
                linkText="HeatMap"
                link="https://leetcode.com/pritish__mishraa/"
                timestamp="Oct 2021"
            />
            <TimeBox
                text="Created my first repository on "
                linkText="GitHub"
                link="https://github.com/PritishMishraa"
                timestamp="Jan 2021"
            />
            <TimeBoxComment
                text="Joined collage "
                linkText="Manipal University Jaipur"
                link="https://jaipur.manipal.edu/"
                description="I was both nervous and excited. Started in online mode and then finally went to campus after 6 months."
                timestamp="Nov 2020"
            />
        </ol>
    )
}