import React from 'react'
import { db } from "../firebase"
import { storage } from "../firebase"
import "./list.css"
import { useEffect, useState, useRef } from 'react'
import { set, ref, onValue, remove, update } from "firebase/database";
import { uploadBytes, ref as sref, getDownloadURL } from "firebase/storage"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery"

const List2 = () => {

    const [List, setList] = useState([]);
    const [image, setImage] = useState(null);
    const [prescription, setUrl] = useState("")
    useEffect(() => {
        onValue(ref(db, "Users"), snapshot => {
            setList([])
            const data = snapshot.val();

            if (data !== null) {
                Object.values(data).map((name) => {
                    if (name.doctor === "Patient" && name.takemri === true && name.retest === true) {
                        setList(oldArray => [...oldArray, name])
                    }



                })
            }

        });

    }, [])
    console.log(List)

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    function handleInput(x, y) {
        const uploadTask = sref(storage, `uploads/${x}`);
        uploadBytes(uploadTask, image).then(() => {
            alert("uploaded successfully")
        })
        getDownloadURL(uploadTask).then(url => {
            setUrl(url);
        })
        console.log(y)
        set(ref(db, `/Users/${y}/prescription`), {
            URL: prescription
        })
    };


    $(window).on('resize', function () {

        if ($(this).width() < 760) {
            $('tr td:first-child').click(function () {

                $(this).siblings().css({ 'display': 'inline-block' });

                var $this = $(this);
                setTimeout(function () {
                    $this.siblings().css('transform', 'translateY(0)');
                }, 0);

                $('tr td:first-child').not($(this)).siblings().css({ 'display': 'none', 'transform': 'translateY(-9999px)' });
            });
        }

    });
    return (
        <>

            <h1 style={{ color: "black" }}>Patient's List for Retest</h1>

            <table>
                <thead>
                    <tr class="table-headers">
                        <th>Name</th>
                        <th>Ph. no</th>
                        <th>Age</th>
                        <th>Upload</th>
                        <th>Submit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        List.map((doc, index) => {
                            return (
                                <tr>
                                    <td>{doc.name}</td>
                                    <th class="mobile-header">Ph no.</th><td><a href={`tel:${doc.phone}`}>{doc.phone}</a></td>
                                    <th class="mobile-header">Age</th><td>{doc.age}</td>
                                    <th class="mobile-header">Upload</th><td><input type="file" onChange={handleChange} accept=".jpg" /></td>
                                    <th class="mobile-header">Submit</th><td>  <button type='Button' onClick={() => handleInput(doc.uid + ".jpg", doc.uid)} className="btn btn-primary"> Add info</button></td>
                                </tr>
                            )
                        })}


                </tbody>
            </table>    </>
    )
}

export default List2