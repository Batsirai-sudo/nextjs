import { Fragment } from "react";

export const Slider = () => {

    const sliderItems = [
        {
            id: 1,
            description_classes: 'd-flex justify-content-between align-items-center w-100 mt-30',
            dataOverlay: 6,
            src: 'one.jpeg',
            h2Href: 'project-4.html',
            h2Text: 'A Journey of Faith and Redemption',
            hashTags: [
                '#FaithJourney',
                '#Transformation',
                '#GodsLove'
            ],
            item_description: 'From Darkness - to Light',
            view_link: 'https://www.youtube.com/live/2SicMJlXtB4'
        },
        {
            id: 2,
            description_classes: 'd-flex justify-content-between description align-items-center w-100 mt-30',
            dataOverlay: 7,
            src: 'two.jpeg',
            h2Href: 'project-1.html',
            h2Text: 'Absolute Faith',
            hashTags: [
                '#spiritualinsigh',
                '#triumphovertrials',
                '#Hebrews11'
            ],
            item_description: 'Triumph Over Trials',
            view_link: 'https://www.youtube.com/watch?v=r8YVhZIB_4I'
        },
        {
            id: 3,
            description_classes: 'd-flex justify-content-between description align-items-center w-100 mt-30',
            dataOverlay: 5,
            src: 'three.png',
            h2Href: 'project-2.html',
            h2Text: 'Choices, Consequences',
            hashTags: [
                '#ChoicesMatter',
                '#Parenting',
                '#SpiritualWarfare'
            ],
            item_description: 'The Future of Our Children',
            view_link: 'https://www.youtube.com/watch?v=-rANGPr95rk'
        },
        {
            id: 4,
            description_classes: 'd-flex justify-content-between description align-items-center w-100 mt-30',
            dataOverlay: 3,
            src: 'four.png',
            h2Href: 'project-3.html',
            h2Text: 'Justice Pour Le Congo',
            hashTags: [
                '#Justice',
                '#Congo'
            ],
            item_description: 'Stop the Genocost',
            view_link: '#'
        },
        {
            id: 5,
            description_classes: 'd-flex description justify-content-between align-items-center w-100 mt-30',
            dataOverlay: 6,
            src: 'five2.png',
            h2Href: 'project-5.html',
            h2Text: 'Revival: Coming Revival in Holland',
            hashTags: [
                '#revivalprayer',
                '#BiblicalRevival',
                '#christianfaith'
            ],
            item_description: 'Act 2.17',
            view_link: 'https://www.youtube.com/shorts/JWea9k8kkuo'
        },
        {
            id: 6,
            description_classes: 'd-flex description justify-content-between align-items-center w-100 mt-30',
            dataOverlay: 5,
            src: 'six.png',
            h2Href: 'project-6.html',
            h2Text: 'The Glory Today - Show',
            hashTags: [
                '#faith',
                '#glory',
            ],
            item_description: '',
            view_link: '#'
        },
        {
            id: 7,
            description_classes: 'd-flex description justify-content-between align-items-center w-100 mt-30',
            dataOverlay: 4,
            src: 'seven.png',
            h2Href: 'project-7.html',
            h2Text: 'The Glory Today - Show',
            hashTags: [
                '#Faith',
            ],
            item_description: '',
            view_link: 'https://www.youtube.com/watch?v=7ekGSW60U8w&t=805s'
        },
    ];

    const getImagePath = ( image: string) => `assets/img/slider/${ image }`;

    return (
        <Fragment>
            <header className="dsn-section-padding v-dark-head h-100-v p-relative">
                <div className="main-slider has-horizontal  active-nav-slider dsn-webgl has-paginate dsn-header-animation"
                     data-dsn-webgl='{"displacement" : "assets/img/displacement/10.jpg"}'
                     data-dsn-option='{"direction":"horizontal","allowTouchMove":true,"watchSlidesProgress":true,"grabCursor":true,"mousewheel":false}'>

                    <div className="content-slider slide-inner h-100 over-hidden">
                        <div className="bg-container p-absolute dsn-hero-parallax-img  w-100 h-100 z-index-1">
                            <div className="swiper swiper-container  h-100">
                                <div className="swiper-wrapper">

                                  { sliderItems.map(( item ) => (
                                          <SliderItem
                                              key={ item.id }
                                              description_classes={ item.description_classes }
                                              dataOverlay={ item.dataOverlay }
                                              src={ getImagePath( item.src ) }
                                              h2Text={ item.h2Text }
                                              hashTags={ item.hashTags }
                                              item_description={ item.item_description }
                                              view_link={ item.view_link }
                                              h2Href={ item.h2Href }
                                          />
                                      )
                                  )}
                                </div>
                            </div>
                        </div>

                        <div className="dsn-slider-content dsn-container  dsn-hero-parallax-title p-relative h-100 w-100  d-flex align-items-end w-100 h-100 z-index-2">
                        </div>

                        <div className="progress-nav mt-40">
                            <div className="progress-w">
                                <div className="progress-w-after"></div>
                            </div>
                        </div>
                    </div>
                    <div className="control-num">
                        <span className="sup active swiper-pagination-custom">01</span>
                    </div>
                    <div className="dsn-nex-prev v-dark-head d-flex">
                        <div className="prev">
                            <div className="dsn-wrapper h-100"></div>
                            <h5 className="heading-color">PREV</h5>
                        </div>

                        <div className="next dsn-active">
                            <div className="dsn-wrapper h-100"></div>
                            <h5 className="heading-color">NEXT</h5>
                        </div>
                    </div>

                </div>
            </header>
        </Fragment>
    );
}

const SliderItem = (
    {
        description_classes,
        dataOverlay,
        src,
        h2Text,
        hashTags,
        item_description,
        view_link,
        h2Href
    }: {
        description_classes: string;
        dataOverlay: number;
        src: string;
        h2Href: string;
        h2Text: string;
        hashTags: string[];
        item_description: string;
        view_link: string;
    }) => (
    <div className="slide-item swiper-slide over-hidden">
        <div className="image-bg cover-bg w-100 h-100 before-z-index" data-overlay={ dataOverlay }>
            <img loading="lazy" src={ src } className="cover-bg-img dsn-swiper-parallax-transform" alt=""/>
        </div>
        <div className="slide-content p-absolute">
            <h2 className="title-lg has-box-mod p-relative">
                <a className="effect-ajax text-upper" data-dsn-split="chars" data-dsn-ajax="slider" href={ h2Href }>
                    { h2Text }
                </a>
            </h2>

            <div className={ description_classes }>
                <div className="cat head-meta p-0">
                    { hashTags.map(( item ) => (
                        <span key={ item } className="background-section heading-color">{ item }</span>
                    ))}
                </div>

                <p className="item description">
                    <span className="text-upper">
                        { item_description }
                    </span>
                </p>

                <div className="dsn-btn dsn-btn-shape d-inline-flex d-flex no-padding text-upper">
                    {/*effect-ajax*/}
                    <a className="button" href={ view_link } target="_blank">
                        <span className="title-btn p-relative z-index-1" data-animate-text="View episode">
                             <span>View episode</span>
                        </span>
                    </a>
                    <span className="icon background-section theme-color">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
)
