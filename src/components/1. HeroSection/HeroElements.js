import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M0%2c586.771C107.738%2c577.003%2c202.751%2c510.623%2c278.562%2c433.451C344.985%2c365.836%2c352.278%2c264.795%2c397.909%2c181.719C448.505%2c89.605%2c553.843%2c24.203%2c560.946%2c-80.652C568.356%2c-190.042%2c500.372%2c-289.014%2c435.798%2c-377.621C366.763%2c-472.349%2c294.194%2c-590.864%2c177.981%2c-606.147C61.01%2c-621.53%2c-21.944%2c-492.67%2c-132.837%2c-452.401C-233.761%2c-415.752%2c-370.911%2c-463.462%2c-440.384%2c-381.595C-509.952%2c-299.617%2c-450.604%2c-173.274%2c-460.557%2c-66.218C-469.862%2c33.861%2c-522.856%2c129.837%2c-496.962%2c226.955C-469.038%2c331.688%2c-400.828%2c423.52%2c-313.032%2c487.087C-222.499%2c552.635%2c-111.314%2c596.863%2c0%2c586.771' fill='%230c233b'%3e%3c/path%3e%3cpath d='M1440 1049.853C1533.266 1050.17 1633.884 1030.921 1701.067 966.2280000000001 1765.386 904.293 1756.31 802.119 1785.06 717.583 1810.297 643.377 1858.936 578.025 1859.748 499.649 1860.638 413.698 1842.431 324.853 1789.8310000000001 256.87 1735.944 187.224 1655.849 132.62 1568.318 122.99000000000001 1484.884 113.81099999999998 1418.725 190.89600000000002 1336.343 206.976 1241.221 225.543 1128.451 164.23899999999998 1051.975 223.774 976.557 282.485 982.281 397.637 969.721 492.384 957.288 586.173 941.017 683.873 979.524 770.292 1018.178 857.04 1098.891 915.172 1180.071 964.4580000000001 1259.6390000000001 1012.765 1346.917 1049.537 1440 1049.853' fill='%23103153'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)
                    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`