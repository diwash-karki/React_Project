import React, { Component } from "react"
import './styles.css'

class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onPlay: false,
            audioSrc: props.audioSrc,
            intervalId: undefined,
            audioId: crypto.randomUUID(),
            sliderId: crypto.randomUUID()
        };
    }

    playPauseMusic = () => {
        const audio = document.getElementById(this.state.audioId)
        const seek = document.getElementById(this.state.sliderId)
        this.setState({ onPlay: !this.state.onPlay })
        if (this.state.onPlay) {
            audio.pause()
            clearInterval(this.state.intervalId)
        } else {
            audio.play()
            this.setState({
                intervalId: setInterval(() => this.updateSlider(audio, seek), 1000)
            })

        }
    }

    updateSlider = (a, s) => {
            const value = (a.currentTime / a.duration) * 100;
            s.value = value;
            if (a.currentTime === a.duration) {
                this.setState({ onPlay: false })
                clearInterval(this.state.intervalId)
            }
    }

    seekable = (e)=>{
        const audio = document.getElementById(this.state.audioId)
        const seek = document.getElementById(this.state.sliderId)
        const value = (e.target.value / 100) * audio.duration;
        audio.currentTime = value;
        seek.value = e.target.value;
     

    }

   

    render() {
        return <div className='Music-Player'>
            <div className='audio-player-holder' style={{
                backgroundImage: "url('" + this.props.imagePreview + "')"
            }}>
                <div className='controller-holder'>
                    <audio controls id={this.state.audioId}>
                        <source src={this.state.audioSrc} type="audio/ogg" />
                    </audio>
                    <button className='play-pause' onClick={() => this.playPauseMusic()}>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em">
                            {
                                this.state.onPlay ? <path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z" />
                                    : <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" />

                            }

                        </svg></button>
                    <div>
                        <input type='range' className='slider' id={this.state.sliderId} defaultValue='0' max='100' onInput={(e)=>this.seekable(e)} />

                        <label className="music-title"> {this.props.musicTitle}  <sub style={{
                            color: '#f6f6f6',
                            fontSize: '10px'
                        }}>by hello</sub> </label>


                    </div>

                </div>
            </div>
        </div>

    }

}
export default MusicPlayer;