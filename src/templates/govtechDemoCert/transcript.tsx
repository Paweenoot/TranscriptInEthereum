import React, { FunctionComponent } from "react";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
import sutLogo from "./common/SUT_Logo.png";
import transcriptBg from "./common/transcript-background.png";

export const TranscriptTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => {

  const transcriptData = document.transcript || [];

  const transcriptLeft = transcriptData.map((t, i) => (
    <table>

      {i < 7 && (<div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
        <b>{t.trimester}</b>
        {t.subject.map((s) => (
          <tr>
            <td >&emsp;
        {s.courseCode}
            </td>
      &emsp;&emsp;
            <td style={{ width: "360px" }}>
              {s.name}
            </td>
      &emsp;&emsp;
            <td>
              {s.courseCredit}
            </td>
      &emsp;&emsp;
            <td>
              {s.grade}
            </td>
          </tr>
        ))}
        <b>CREDITS EARNED = {t.creditEarned} &nbsp; TOTAL CREDITS EARNED {t.totalCredit} &nbsp;
       GPA {t.GPA} &nbsp; GPAX = {t.GPAX}</b></div>)}

    </table>
  ));

  const transcriptRight = transcriptData.map((t, i) => (
    <table>

      {i > 6 && (<div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
        <b>{t.trimester}</b>
        {t.subject.map((s) => (
          <tr>
            <td >&emsp;
        {s.courseCode}
            </td>
      &emsp;&emsp;
            <td style={{ width: "360px" }}>
              {s.name}
            </td>
      &emsp;&emsp;
            <td>
              {s.courseCredit}
            </td>
      &emsp;&emsp;
            <td>
              {s.grade}
            </td>
          </tr>
        ))}
        <b>CREDITS EARNED = {t.creditEarned} &nbsp; TOTAL CREDITS EARNED {t.totalCredit} &nbsp;
       GPA {t.GPA} &nbsp; GPAX = {t.GPAX}</b></div>)}

    </table>
  ));

  return (
    <>
      <div className="container">
        <div
          className="p-2 container"
          style={{
            backgroundImage: `url('${transcriptBg}')`,
            backgroundRepeat: "repeat",
            width: "300%"
          }}
        >
          <div className="row">
            <div style={{ paddingLeft: "6%" }}>
              <img
                style={{
                  width: "140px", height: "150px"
                }}
                src={sutLogo}
              />
            </div>
            <div className="tranhead" style={{ paddingTop: "5%", paddingLeft: "15%" }}>
              <b>SURANAREE UNIVERSITY OF TECHNOLOGY<br />
            Nakhon Ratchasima, Thailand<br />
            TRANSCRTPT OF RECORDS
          </b></div>
          </div>

          <div
            className="row transcript"
            style={{ paddingLeft: "5%", paddingTop: "2%" }}
          >
            <div className="col">
              <div className="row">
                <div className="col"><b>NAME &emsp;
                  {document.recipient.nameENG}
                  <br />
                  &emsp;&emsp;&emsp;&emsp;&nbsp;
                  {document.recipient.nameTH}
                </b></div>
              </div>
              <div className="row">
                <div className="col"><b>BIRTHDATE </b>&emsp;
                {document.recipient.birthDate}
                </div>
              </div>
              <div className="row">
                <div className="col"><b>BIRTHPLACE </b>&emsp;
                  {document.recipient.birthPlace}
                </div>
              </div>
              <div className="row">
                <div className="col"><b>PREVIOUS CERTIFICATES </b>&emsp;
                  {document.recipient.prevCert}
                </div>
              </div>
              <div className="row">
                <div className="col"><b>INSTITUTE OF </b>&emsp;
                  {document.recipient.instituteOf}
                </div>
              </div>
              <div className="row">
                {document.recipient.graduationDate !== "" && (
                  <div className="col"><b>DEGREE CONFERRED </b>&emsp;
                    {document.recipient.degreeENG}</div>) || (
                    <div className="col"><b>DEGREE CONFERRED </b>&emsp;
                    (ภาษาอังกฤษ)
                    </div>)}
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col"><b>STUDENT ID &emsp;
                  {document.recipient.studentID}
                </b></div>
              </div>
              <div className="row">
                <div className="col"><b>IDENTIFICATION NUMBER &emsp;
                  {document.recipient.identNum}
                </b></div>
              </div>
              <div className="row">
                <div className="col"><b>NATION </b>&emsp;
                  {document.recipient.nation}
                </div>
              </div>
              <div className="row">
                <div className="col"><b>DATE OF ADMISSION </b>&emsp;
                  {document.recipient.admissionDate}
                </div>
              </div>
              <div className="row">
                <div className="col"><b>DATE OF GRADUATION</b>&emsp;
                {document.recipient.graduationDate}
                </div>
              </div>
              <div className="row">
                <div className="col"><b>SCHOOL OF </b>&emsp;
                  {document.recipient.schoolOf}
                </div>
              </div>
              <div className="row">
                {document.recipient.graduationDate !== "" && (
                  <div className="col">{document.recipient.degreeTH}</div>) || (
                    <div className="col">(ภาษาไทย)</div>)}
              </div>
            </div>
          </div>
          <hr className="line" />

          {transcriptData !== [] && (
            <div className="row mb-4" style={{ paddingLeft: "5%" }}>
              <div className="row transcript" >
                <tbody>
                  {transcriptLeft}
                </tbody>
                <tbody>
                  {transcriptRight}
                  {document.recipient.graduationDate !== "" && (
                    <div className="tranend">
                      <hr className="dashed" />
                      <b>transcript Closed</b></div>
                  )}
                </tbody>
              </div>
            </div>
          )}
          <hr className="line" />

          <div className="row">
            <div className="col" />
            <div
              className="col text-center"
              style={{
                paddingRight: "5%",
                width: "100%",
                height: "auto"
              }}
            >
              <img style={{
                width: "100px", height: "50px"
              }}
                src={get(document, "certSignatories.signature")} />
              <div className="transcript"><br />
                {get(document, "certSignatories.name")}
                <br />
                {get(document, "certSignatories.position")},{" "}
                <br />
                {get(document, "issuedOn")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
