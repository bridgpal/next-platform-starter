import { Card } from './card';

export function CardsGrid({ cards, columns = 3 }) {
    const gridCols = {
        2: 'sm:grid-cols-2',
        3: 'sm:grid-cols-2 lg:grid-cols-3',
        4: 'sm:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <section className="relative">
            {/* Section decoration */}
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-vermillion/50 via-cream/10 to-transparent hidden lg:block" />

            <div className={`grid gap-6 ${gridCols[columns] || gridCols[3]}`}>
                {!!cards?.length && cards.map((card, index) => (
                    <div
                        key={index}
                        className="opacity-0 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                    >
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </section>
    );
}
