import React from 'react'
import classNames from 'classnames';
import Image from '../elements/Image';

export const Card = ({delay,img,alt,name,desc}) => {
    const innerClasses = classNames(
        'features-tiles-inner section-inner pt-0',
        // topDivider && 'has-top-divider',
        // bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        // pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Unlimited animes at a click',
        paragraph: "Animeflixx is the home of amazing original animes that you can't find anywhere else. Watch animes which are all tailored specifically to you."
    };
    return (
        <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
            <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                        <Image
                            src={img}
                            alt={alt}
                        />
                    </div>
                </div>
                <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                        {name}
                    </h4>
                    <p className="m-0 text-sm">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
