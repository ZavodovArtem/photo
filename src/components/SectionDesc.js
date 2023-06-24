import fly from '../img/fly.svg'
import heart from '../img/heart.svg'
import heartTwo from '../img/heart-two.svg'
import sunSmall from   '../img/sun-small.svg'
import ball from '../img/ball.svg'
import sun from  '../img/sun.svg'
import './SectionDesc.css'


function SectioDesc () {
    return (
        <>
            <div className='description'>
                <img src={fly} />
                <img src={sun} />
                          
                <p className='oneText'> sdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdflsdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfejsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfesdfljsdfkgsekfe</p>

            </div>
            <div className='description-two'>
                <img src={heart} />
                <img src={sunSmall} />
                <img src={ball} />

                <p className='twoText'>sdfsdfs;dfhlksdflkhsaglfgsdfsdfs;dfhlksdflkhsaglfgljawgfuygweufsdfsdfs;dfhlksdflkhsaglfgljawgfuygweufsdfsdfs;dfhlksdflkhsaglfgljawgfuygweufsdfsdfs;dfhlksdflkhsaglfgljawgfuygweufljawgfuygweuf</p>
            </div>
        </>
    )
}

export default SectioDesc