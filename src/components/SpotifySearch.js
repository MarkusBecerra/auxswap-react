import React, { useContext, useEffect, useState } from "react";
import * as $ from "jquery";
import './SpotifySearch.css';
import TokenContext from './TokenContext'
import SpotifyPlayer from 'react-spotify-web-playback';

const SpotifySearch = (props) => {
    const context = useContext(TokenContext);  
    const [topResults, setTopResults] = React.useState([]);
    const [trackName, setTrackName] = React.useState("")
    const numSearchResults = 5; //number of results we want to return

    // a workaround to programatically trigger the onChange event of the
    // new-message-input-field, so that it sets the new message
    function setNativeValue(element, value) {
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
        
        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(element, value);
        } else {
          valueSetter.call(element, value);
        }
      }
    
    const appendSongToMessage = (song) => {
        let textarea = document.getElementById("new-message-input-field")
        console.log(`Attempting to add song: ${song}`)
        console.log(`Current value: ${textarea.value}`)

        setNativeValue(textarea, song + " " + textarea.value );
        textarea.dispatchEvent(new Event('input', { bubbles: true }));

    }

    const getSongSearch = (props) => {
        setTopResults([])
        topResults.length = 0

        if(trackName != "")
        {
            console.log("INSIDE")
        $.ajax({
        url: `https://api.spotify.com/v1/search?q=${trackName}&type=track&limit=${numSearchResults}&offset=0`,
        type: "GET",
        beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + context.currtoken);
        },
        dataType: "json",
       
        success: data => {
            if(!data){

            }
            console.log("SUCCESS SUCCESS SUCCESS")
            console.log(data);
            
            data.tracks.items.forEach(element => {
                setTopResults(topResults => [...topResults, element])
            });   
        },
        error: error => {
            console.log("ERROR ERROR ERROR")
          console.log(error);
    
        }
      });
        }
        
        
      }
      useEffect(() => {
          // TODO: FIGURE OUT HOW TO CLEAR OUT THE topResults ARRAY
          // WHEN CHANGES ARE MADE IN THE SEARCHBAR
          // if someone types fast enough, this can get up to length 10, due to asynchronous issues
        console.log("SpotifySearch useEffect")
        topResults.length = 0
        setTopResults([])
        // setTrackName(document.getElementById('searchbar').value)
        getSongSearch(props);


    },[trackName]);
    return(
        
        <div>
            {/* <input type="search" id="searchbar" autoComplete="off" className="send-search-button" onChange={() => {console.log(`value should be: ${document.getElementById('searchbar').value}`);console.log(`length: ${topResults.length}`);setTopResults([]);topResults.length=0; setTrackName(document.getElementById('searchbar').value);console.log(`trackName is: ${trackName}`); getSongSearch(props)}} /> */}
            <input type="search" id="searchbar" autoComplete="off" className="send-search-button" onChange={() => {console.log(`value should be: ${document.getElementById('searchbar').value}`);console.log(`length: ${topResults.length}`);setTopResults([]);topResults.length=0; setTrackName(document.getElementById('searchbar').value);}} />

            {/* <input type="search" id="searchbar" autoComplete="off" className="send-search-button" onChange={() => {console.log(`value should be: ${document.getElementById('searchbar').value}`);console.log(`length: ${topResults.length}`);topResults.length=0;setTrackName(document.getElementById('searchbar').value);getSongSearch()}} /> */}

            {/* <button onClick={() => {console.log(`value should be: ${document.getElementById('searchbar').value}`);setTopResults([]); setTrackName(document.getElementById('searchbar').value);console.log(`trackName is: ${trackName}`); getSongSearch(props)}} className="send-search-button">
            SEARCH
            </button> */}

            

        <h1>RESULTS </h1>
        <ul>
            {/* <li> */}
                {topResults.slice(0, numSearchResults).map(index => {
                    return <img key={index.external_urls.spotify} src={index.album.images[2].url} title={index.name} onClick={() => {appendSongToMessage(index.external_urls.spotify)}}/>
                })}
            {/* </li> */}
        </ul>
        
      </div>
    )
        
    }
    
    export default SpotifySearch