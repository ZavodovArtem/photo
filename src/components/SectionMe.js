import './Header.css'
import '../App.css'
import './SectionMe.css'
import photoMe from '../img/section-me.jpg'


function SectionMe () {
    return (
        <>
        <div className='me'>
            <img className='me-photo' src={photoMe} />

            <div>
                <p className='me-p'>erfguergf</p>
                <br />
                <p className='me-p'>sdfewrferf</p>
                <br />
                <p className='me-p'>sdfsdfsdf</p>
            </div>

        </div>

        </>
    )
}

export default SectionMe