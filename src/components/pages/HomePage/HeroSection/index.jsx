// import { MediaContainer } from 'components/common';

// // import Video from 'assets/videos/hero.mp4'; 
// // 
// import Video from 'https://www.shutterstock.com/shutterstock/videos/1108933769/preview/stock-footage-indian-girl-in-indian-traditional-bridal-wear-in-photoshoot-in-studio-royal-background-anand.mp4';
// import LogoHero from 'assets/images/logo-hero.png';

// import styles from './index.module.scss';

// const HeroSection = () => {
//   return (
//     <section className={styles.section}>
//       <div className={`${styles.container} main-container`}>
//         <MediaContainer
//           video={Video}
//           autoPlay
//           loop
//           muted
//           containerClassName={styles.video_container}
//           fillClassName={styles.video_fill}
//           mediaClassName={styles.video}
//         />
//         <div className={styles.content}>
//           <div className={styles.logo_wrapper}>
//             <img src={LogoHero} alt="Hero Logo" className={styles.logo} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { MediaContainer } from 'components/common';
// import LogoHero from 'assets/images/logo-hero.png';

import LogoHero from 'assets/images/siyaLogo.png'

// import Video from 'assets/videos/hero.mp4'; 
// mainvideo
// import Video from 'assets/videos/mainvideo.mp4'; 

import Video from  'assets/videos/logoVideo.mp4'

import styles from './index.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} main-container`}>
        <MediaContainer
          video={Video}
          autoPlay
          loop
          muted
          containerClassName={styles.video_container}
          fillClassName={styles.video_fill}
          mediaClassName={styles.video}
        />
        <div className={styles.content}>
          <div className={styles.logo_wrapper}>
            <img src={LogoHero} alt="Hero Logo" className={styles.logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
