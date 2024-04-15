import { useState } from 'react';

function Lifebar() {
    const [health, setHealth] = useState(100);

    const dealDamage = (damage) => {
        setHealth(prevHealth => Math.max(prevHealth - damage, 0));
    };

    return (
        <div>
            <div style={{ width: `${health}%`, backgroundColor: '#BC0000', height: '20px' }}>
                {health}%
            </div>
            <button type="button" onClick={() => dealDamage(10)}>Take 10 Damage</button>
        </div>
    );
};

export default Lifebar;
