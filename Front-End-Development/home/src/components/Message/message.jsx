import React from "react";
import {useState} from "react";
import { auth, messageDatabase } from "../../Firebase Settings (back-end)/messageDatabase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

