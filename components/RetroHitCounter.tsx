import RetroHitCounter from 'react-retro-hit-counter';

export default function ViewCounter({ view }) {
    return (
        <RetroHitCounter
            hits={view}
            withBorder={true}
            withGlow={false}
            minLength={4}
            size={64}
            padding={12}
            digitSpacing={12}
            segmentThickness={9}
            segmentSpacing={0.5}
            segmentActiveColor="#76FF03"
            segmentInactiveColor="#315324"
            backgroundColor="#222222"
            borderThickness={10}
            glowStrength={0.5}
        />
    )
};