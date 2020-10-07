import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface GovtechOpencertsTemplateCertificate extends Document {
  issuedOn: string;
  recipient: {
    nameTH: string;
    nameENG: string;
    birthDate: string;
    birthPlace: string;
    prevCert: string;
    instituteOf: string;
    degreeTH: string;
    degreeENG: string;
    studentID: string;
    identNum: string;
    nation: string;
    admissionDate: string;
    graduationDate: string;
    schoolOf: string;
  };
  transcript: {
    trimester: string;
    year: string;
    subject: {
      courseCode: string;
      name: string;
      courseCredit: string;
      grade: string;
    }[];
    creditEarned: string;
    totalCredit: string;
    GPA: string;
    GPAX: string;
  }[];
  certSignatories: {
    signature: string;
    name: string;
    position: string;
  };
}

export const customTemplateCertificate: GovtechOpencertsTemplateCertificate = {
  issuedOn: "August 11, 2020",
  recipient: {
    nameTH: "นางสาวสมศรี มั่นคง",
    nameENG: "Miss Somsri Munkong",
    birthDate: "December 7, 1998",
    birthPlace: "Khon khan, Thailand",
    prevCert: "M.6 / March 29, 2017",
    instituteOf: "Engineering",
    degreeTH: "วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)",
    degreeENG: "Bachelor og engineering (Computer engineering)",
    studentID: "B6012345",
    identNum: "1424567890156",
    nation: "Thai",
    admissionDate: "July 31, 2017",
    graduationDate: "July 31, 2021",
    schoolOf: "Computer Engineering"
  },
  transcript: [
    {
      trimester: "First",
      year: "2017",
      subject: [
        {
          courseCode: "103101",
          name: "Calculus I",
          courseCredit: "4",
          grade: "B+"
        },
        {
          courseCode: "105101",
          name: "Physics I",
          courseCredit: "4",
          grade: "B+"
        },
        {
          courseCode: "105191",
          name: "Physics Laboratory I",
          courseCredit: "1",
          grade: "A"
        },
        {
          courseCode: "202108",
          name: "Digital Litercy",
          courseCredit: "2",
          grade: "A"
        },
        {
          courseCode: "202109",
          name: "Use of application programs for learning",
          courseCredit: "1",
          grade: "A"
        },
        {
          courseCode: "213101",
          name: "English for communication 1",
          courseCredit: "3",
          grade: "S"
        },
        {
          courseCode: "213201",
          name: "English for communication 2",
          courseCredit: "3",
          grade: "S"
        },
        {
          courseCode: "525101",
          name: "Engineering graphics I",
          courseCredit: "2",
          grade: "B"
        }
      ],
      creditEarned: "20",
      totalCredit: "20",
      GPA: "3.57",
      GPAX: "3.57"
    },
    {
      trimester: "Second",
      year: "2017",
      subject: [
        {
          courseCode: "103102",
          name: "Calculus II",
          courseCredit: "4",
          grade: "B+"
        },
        {
          courseCode: "105102",
          name: "Physics II",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "105192",
          name: "Physics Laboratory II",
          courseCredit: "1",
          grade: "A"
        },
        {
          courseCode: "202201",
          name: "Life skills",
          courseCredit: "3",
          grade: "B"
        },
        {
          courseCode: "213101",
          name: "English for academic purposes",
          courseCredit: "3",
          grade: "A"
        },
        {
          courseCode: "523101",
          name: "Computer programming I",
          courseCredit: "2",
          grade: "A"
        }
      ],
      creditEarned: "17",
      totalCredit: "37",
      GPA: "3.71",
      GPAX: "3.65"
    },
    {
      trimester: "Third",
      year: "2017",
      subject: [
        {
          courseCode: "102111",
          name: "Fundamental chemistry I",
          courseCredit: "4",
          grade: "C+"
        },
        {
          courseCode: "105191",
          name: "Fundamental chemistry Laboratory I",
          courseCredit: "1",
          grade: "B+"
        },
        {
          courseCode: "103105",
          name: "Calculus III",
          courseCredit: "4",
          grade: "B+"
        },
        {
          courseCode: "202202",
          name: "Citizenship and global citizens",
          courseCredit: "3",
          grade: "B"
        },
        {
          courseCode: "525101",
          name: "Engineering materials I",
          courseCredit: "4",
          grade: "C+"
        }
      ],
      creditEarned: "16",
      totalCredit: "53",
      GPA: "2.91",
      GPAX: "3.39"
    },
    {
      trimester: "First",
      year: "2018",
      subject: [
        {
          courseCode: "523201",
          name: "Computer programming II",
          courseCredit: "2",
          grade: "B+"
        },
        {
          courseCode: "523203",
          name: "Problem solving with programming",
          courseCredit: "2",
          grade: "A"
        },
        {
          courseCode: "523271",
          name: "Electronics for computer engineering",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523275",
          name: "Computer mathematics",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523312",
          name: "Knowledge discovery and data mining",
          courseCredit: "4",
          grade: "A"
        }
      ],
      creditEarned: "16",
      totalCredit: "69",
      GPA: "3.94",
      GPAX: "3.53"
    },
    {
      trimester: "Second",
      year: "2018",
      subject: [
        {
          courseCode: "202203",
          name: "Man, society and environment",
          courseCredit: "3",
          grade: "B"
        },
        {
          courseCode: "213204",
          name: "English for specific purposes",
          courseCredit: "3",
          grade: "A"
        },
        {
          courseCode: "523231",
          name: "Data structures and algorithms",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523232",
          name: "Object-oriented technology",
          courseCredit: "4",
          grade: "C+"
        },
        {
          courseCode: "523271",
          name: "Electronics laboratory for computer engineering",
          courseCredit: "1",
          grade: "B"
        },
        {
          courseCode: "523273",
          name: "Digital system design",
          courseCredit: "4",
          grade: "A"
        }
      ],
      creditEarned: "19",
      totalCredit: "88",
      GPA: "3.47",
      GPAX: "3.52"
    },
    {
      trimester: "Third",
      year: "2018",
      subject: [
        {
          courseCode: "203401",
          name: "Chinese I",
          courseCredit: "3",
          grade: "A"
        },
        {
          courseCode: "523211",
          name: "Database systems",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523251",
          name: "Programming fundamentals",
          courseCredit: "4",
          grade: "B+"
        },
        {
          courseCode: "523274",
          name: "Digital system laboratory",
          courseCredit: "1",
          grade: "A"
        },
        {
          courseCode: "523276",
          name: "Computer architecture and organization",
          courseCredit: "4",
          grade: "B+"
        },
        {
          courseCode: "601111",
          name: "Spiritual health care",
          courseCredit: "3",
          grade: "A"
        }
      ],
      creditEarned: "19",
      totalCredit: "107",
      GPA: "3.79",
      GPAX: "3.57"
    },
    {
      trimester: "First",
      year: "2019",
      subject: [
        {
          courseCode: "202207",
          name: "Man, economy and development",
          courseCredit: "3",
          grade: "C+"
        },
        {
          courseCode: "523301",
          name: "Computer statistics",
          courseCredit: "2",
          grade: "A"
        },
        {
          courseCode: "523331",
          name: "System analysis and design",
          courseCredit: "4",
          grade: "B"
        },
        {
          courseCode: "523351",
          name: "Formal methods and computability",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523371",
          name: "Microprocessors",
          courseCredit: "4",
          grade: "A"
        }
      ],
      creditEarned: "17",
      totalCredit: "124",
      GPA: "3.50",
      GPAX: "3.56"
    },
    {
      trimester: "Second",
      year: "2019",
      subject: [
        {
          courseCode: "202331",
          name: "Asean studies",
          courseCredit: "2",
          grade: "B"
        },
        {
          courseCode: "523315",
          name: "Machine learning fundamentals",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523332",
          name: "Software engineering",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523352",
          name: "Computer and communication",
          courseCredit: "4",
          grade: "B+"
        },
        {
          courseCode: "523354",
          name: "Operating systems",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523355",
          name: "Introduction to blockchain technology",
          courseCredit: "4",
          grade: "A"
        }
      ],
      creditEarned: "22",
      totalCredit: "146",
      GPA: "3.82",
      GPAX: "3.60"
    },
    {
      trimester: "Third",
      year: "2019",
      subject: [
        {
          courseCode: "202175",
          name: "Art appreciation",
          courseCredit: "2",
          grade: "C+"
        },
        {
          courseCode: "202324",
          name: "Pluri-cultural thai studies",
          courseCredit: "2",
          grade: "B"
        },
        {
          courseCode: "203411",
          name: "Japanese I",
          courseCredit: "3",
          grade: "A"
        },
        {
          courseCode: "523314",
          name: "Introduction to natural language processing",
          courseCredit: "4",
          grade: "A"
        },
        {
          courseCode: "523353",
          name: "Computer Network",
          courseCredit: "4",
          grade: "A"
        }
      ],
      creditEarned: "15",
      totalCredit: "161",
      GPA: "3.67",
      GPAX: "3.61"
    }
  ],
  certSignatories: {
    signature: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAB8CAQAAAAMLDtbAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJb0ZGcwAAADEAAAABAAwXU4cAAAAJdnBBZwAAAokAAACMACzEPncAACu1SURBVHja7Z13nNTU2oCfbexSdukorgiCooAUC4rfVUHEggUErFevotj12nu5dlQUu1hAUKyoCIgKigURFQRsgCJKkd5ZYHfZNvN+f5wzs8lMkmmZybLMMz/LJpnk5Mw5yXvemkGi5JFPA3LIIZsc/FRRSRXl7KCYyoTPniZNmhjJiOnoZrRlX/ZlH/ZgD1rQlHxyHI4vZwcbWcda1rGKP1nEcvxe33KaNLWbyJM6kw4cQTcOohMtEr5eOYuZy2xmsQCf1zefJk1txH5SZ3E4x9OLw8i32OtjLSvYRik7KWUnO6kkl1zqkEsuuTSmGc1oSp7t+Uv4lqlM5U+vu2A3IZfmNKEJjcjVi6UyiimhhPWsoMLr5qVxD6tJvT/HczzH0tC0dS1+CtnEdaxgJaupiur8DWjGnuzH/vqfxmFHLGMSbzHX646ohWTQlm50ZT/a0JqWDg9wP6tZyhLm8SO/pSd4bSKDo3me5Yjhs4wxXE9vmgJjEYTOCV2jKSdwL1PZarqKsIh72MfrDqgl1OFo/sfXbA/p4+g+ZcxmGL0cdSVpajSBp3cPzuZMCoPbS/iGz/icRYZjj2AWMIKrXbluB47kGPrSPLitig8Ynn5nJ0BT+jOIXtTTf1fxG3NYyj8s5x/WI8EjM8klh3wa05h86tKMlrSjIx2DC6btTGMy4yn2+qbSxE4+w0xv5z95guOoY3nsPIRt1Hfx6pkcwcMsMVx/On287pJdkHoMZhqVug+LmcgtHE3dmM+Tw+HcxFdUBM80hmNitJGk8ZxMFusf8Cfu4EDHYy9GEAYnoRVH8DzbghN7Cgd53S27EF15niLdcxsYTT8H9WS0FHAGb1Cqz7qYC8ny+jbTxMJV/Mit7BvFkQ0oQfgiSe2oz+XM18OoipE09bpjdgF68bnusXLeoReZrp69EdeyMDixz09P7NrJmwg+9kra+TPoz2w9jNYzyOvbrdGcyA+6p5Zwm0E34Ta9+VFf51d6eH3TadznRAThxiRf5VT+0MNoHM28vuUaSWc+0z00j9OSvubN4Byt9/DxKNle33wad8liLcLspF8nm6v0OnFN+u0QQmNewYcg/MzpKbtqHZ7Uj5Fv0wuj2sZLCP4kCuDVFDJZW04He33TNYiBrNVr3IEp10oP0rbvP1Py+6dJGX0RhMtTdLUhWgP7lMsqoF2TJryPIOzkXnI9aUF7/kYQ/kgvi2oTuWxH+CRl1+vKXwjCmN1+Wh/JPwjCVPbzsBX7aK+GKWnrdW3ifYSdLthCo6UR3yAIo3brYXQTFQhFnOt1QziYMgThIq8bksY9LkMQjkvhFXN5D0F4aTed1jm8jiDMoa3XTQHgTgRhZdpuXXvYD0EYmtJrZvImgnCH1zfvAQ35EkF41sZ5N/XUYx2CcILXDUkp7XmC771uRPL4JyVmLTNZfIjg280GEuzBfIQSBnrdEBNPIQhPeN2MlHIjgtDa62YkizEIVTRI8VXr8C3CZtp4ffspZA9+R9hc42z1xyMIn3ndjJTShCqEIV43I1moVXXPlF93T9Yg/LTbxPqqKb2Sjl43JIy9EaQ2C6OWfIfwiteNSBYHIwi3enDl/6MK4W6vOyAl5PMLwqIamTyiOYIww+tmpJjna/M9Z1OKMN6Taw9DKOMAr7sg6WQzFWGJC8kek0Fb7Ttg3/qaotRzk+sRNnjdiOTxHcJKT65cl8UIM2q9cWskwibae90MGwYhCNdY7svnYn7lBa+bmAT+jSAUeNqGOrRL1qmfRhCPPIBVpFitVVgAcCXCTv7P62bY8hyC2KgsW+hwk5qlr3eDMxHEw+VQF16hiD+SdXr1zDrdo5v7GmFVHMl6dhW6UYavBk+KHDYgfGu7/1u2c4+raa9qBmchiEdZeToxKZgZ6JDkXEI5oDziye1BDwThFo+unmzyWZxy557YuBBBOMN2//4h6aVrC2pSH2mxp2VSr5vHI8H8cwu4z5Ag1GU2JzGxUWS+RliXQv/zVDIS4ecarGjKYwXCr7uhk+h/EIRDTdu6cDdz8CfR7NianxCECl6jU3JvcDrCuuRewoH+CMKVnl1fsTc3uq6H74mfshqdeFElSzjW62Z4gPJ5V9n8cjiOZ1gWFInvStI1e7MRQXg9Fb5sLyIITZJ/IUsyWYnwu0dXV7RhPcI6Grl4zjz+RLjZ0/ty5jQdMbc7osZ8K87hbVM5io28liRXrAuoQljNKam5wf8iCEel5mIWPIwgHOPZ9WGG/knvdPGc9yL8WIMjx7tRhPBHLVSCRcMUBAmublUOmMc5Omm/17n4EH5Kna9CHwTh0lRdLowDEIRXIxzVmkcZy/lJ6PYzgz/sfNfO2YIdnj4oI7E/6xG21ejFQXI4mIeCyTBVAsaZ3BohS36iDKQSYaat0jEJY3svnWbIOxYibHH0A+/PDv0jTHBZrZPBfAQfExEkikR8DdkzirO+gDAhuZ2WAB1YgVDJ8R624SBe5Acmp0xCy6AHj7PUMJ2LGc+FcSdz2oPJ3GdZRzaUruxE+NuipKQiSWO7yOM4HSWA2xfpOVkXj6lyXUiGUxCEJ/V/T4xw9N4s4OeIP2VbKhAOS03nxUwPNiP4uTCKY+tzPLeHaIkTJ5N7guWAyuiS9DtuwLOsMkznEgThPpujo/OaeCyoanuGF+lre1wBixF22Gq7kza2f/DMVVRxLILwqM3ebuxEEK4nn5kIOwzvyj0SvvZ0hA0UUIhEDDAp1Mn6Ii0VXvTUSBiJcQj+KP34Dk+CPjiD0Trl4bP6/ZRs8rRnnFDGePozEEH4j83RjzM1CnF8ijaKNaYcQZhFd8vjxiGIbSlKp7GdIKM99oTNpQxhls2+BQjCaAA64Ee4X+/rwnb+l9CVOyAI1wGwEWGSw7EFuiWvRniWN6UUqdE1SQZzcZRH5uGPS0Nej24cx3F0sciV+giCMJws4FeEiqiE2OhpYPHAWkYlUxisV7W3Ioit6+5MhFLOj3CVFQjCqRzGnwTKJYVPXSX/zbZZLTuN7YS5DUHo5mrXxsZchJ2WFSMeRBCWB4u6TkP4G4AsFqFqf4RPsit5l+uicPsYirBJn3t68MxWZOpn8/CI57wHYWMNdjmJjY0IH8VwfHNuYZYWJpWGeRbnGfb/Cx/Ch/qvoQjCSY5nLKRbDOk0erIUYUDI1j4mbclrCGIr5R3LJwg+znS4SgN9d5cA0CtYNsk8JXP0hD/c5iz2Y9sFzvbU/xuU75VYrDtaUBzStusRhM4AdGc1gvBNyLQ+QnfxZxH0iRksN4j9oxEqbFUV9yAI7wHQxEGqUZVPRnjYl+7yB8LUKI/N5SG9XjV/jJaVLxDKgvXCeuOcJe8c/eAWZrF3xOtnMgw/EnHxMxdhq+MRzyFsdVCiddatuk7/naUfT+bcBDchCJ/bnMN5bCfMEaYGesGtWpgJRfk8GcPZVVsv03+11I53U01vxleCw8nZq/woBAmun+7GPl7tYKoQ/qY+UIcZrLYN0jguinfPrsR8hClRHdk9WFdzA2O4hFPox+W8yl8Gp55M/sdXvBT8uwFVCN/ZnPEe06NhXgTdcA7vIggrODMYztuMtxkXEvaaTRmRcr3UZTvisLTrq9t0mWHbfdpE1jd4jg045RWKNLYTZA/PjVrKVnxVyNb6utK10fSSF6KqasqvCML44E+eyzaEr9mIUGxrSACV/2Je8C8Vr3awxXFZzEXw65/nZv2DTrT0wnscodSjqhvJYCHC+1Ecd6ZWGP3DpTEtPRYglFlKVJfqfp7NM1qd5KTcq89UvRirb9j2O4KwzSQAq7dsJD3BRJz8HANtM668M/gCQVinx4VKFbbYtr2Rx3aClKZEC2lPb0uF/uX6CW1mI8KXhr9bsBhBeEj/rSK/zuYCBOE222tmss4kLv0Lu2S5Six6Tv+VwfnaQLLMInRuGsJPHvak26xCeDniUVfiQ/DzdMweam9R7YVtpDWlCD5dFkpJcktsz5LBJwjCW6bHQ+DdKfxuSMWhgjki1XsdhiC27iL36kltVoe20qUg1QNDFXK+x+YM0Y3thPjD46F4qGlaBvgubEUG8AsSEl6uzPs+egGBKdg0ole5EpSrnev3x9rQUcgOhLWm4dqY8ahaWKFi+Fzc9EzznlJHMVTxb/wIxRZLkqMiLkTUoifcP0D17336r2ytPbHLxaoE9ekmB6ZM1iNM1PqaDsHtT4S9Ia24A0FsbeiBuqFHhGy/Vj9GOtFGH2FXWCnasZ0AUxC2uHWyODjEQne4F36E7WHP/tmE55e6EuXmmYVSeKln+iOmNXMoryD8YPi7kc2bfQTWcWQ34UeoDBnK0xF8tSandFMEiWAAO4oyhO0W0ckdKccfwVlWKWlD0yl1QhBWGQR5NW0ftzxHH3wIa0L02WqFei03hAjKnyNIxLjpWywnbYBResqGvsnr6/CQ9/SI/Cu4xxxcHOXYTsxvdDnQ2ENLtVoPn0NXw7Z+ZACTKQk51gdIyLaXmAccxAXAXsAKAJ1Q0TouJpuBwDjDliIqIGyd3IohwBKLNdhwLsVPNuNMT/25QCYv15Lkx0rjvNrhiBaMJ5dKTjE9IBX3UYcMWwFUoYZ9m5CtSugeTkVwywcAWhYzk6dLLl7MetN2tTRaqsdK9fTpAmxmbYQ7V2ambTZ7lWV9Xdj+EkYCMFBXSpumt+cwKe6xHTfKUp3kwG0HTtZPPuMkey9E4R9gLlbx38or7VeUCPMOAJlsRfjY8op9EfwhmSdWWyhQVJDev23afTuCsN7w3O+q7+TDWjGtTw0RXcP5CDuPqebaAdJHK4fvF6BijI3ksBWhOKTIxDKEKgtHFVVvIzwfqhKRu2tr8OBgq5SgHgkln9nZspXPgtXqt51JYx9Yc7+e0NiOE6U8SGWpPDOX6E7wGzym1yHstHAsWWOjU1SrlCNZb9DkT0TYZinFjCU88/MvVLtFKAopR1hh6RajeD/s532HgAmmm2f96RZXIPgcdPkXIwhjLfddGRzaznXTtiF8atqiHtCvhRynDFahfmAN2IC1e6VyMenI26bVuNKkPB/xzj9G2GlrRJtpWvGbWWyY1IHH2fr4xnZi4rcSRhL3pI6XwJsug2H6/9qyB/AdO0OOzKYF8I/FOV4E4CyaAZv0tllAgYUE0ogzgLdDtm6AkDitIdQBXqDKtuVXsxXobcjzdQ3LATiEOYyoIdUt42U/4B/KbfbmMxT4QwvLofQHNrEDIrhcroYQNw+lXAv9dX4BCAsWvZbmwGMW7zclQFfQHagMKi+V6iuyKrMDsBCfzV61ULV2cam26m8IRlS8TmJjOy4OQhBucOt0MTNSi7HVIssAG7VVd4PRwIyyT2/G6HTS21LHqBJDlIXZsN8K0VxnshyhNEJWmKsRhKWGt3lbHfihhM/x9N9l7dYf4eRPNtRBvqtHGcJEXePUKWvmNIRlpi1zELaHWbvPINybIptVCCssvfGVxKRq0FTHII5BEMu1uZG6+HCyZS9D2GGzwDo5+NtXyx+NdXXRGMe2G29q1yJEYuYwYJ12PnmWAgJP1HBfI6VL/dHiHOV8QkDRFVCwzEXAwhByKfBRmKvgRsxv6hNoDYyLYBcYxWpgX4MWfCmHBtd4mQxkIut5g/M97N94aQ+27hP7cAPwoY1d9URygS+1Y63Tu3oN5jd1PboBnxuUZIqV+qpGTqcQeCTsnQfobcpYVl2DRjlhLo1w3weQiVJ6WtGa1sBsKi33/hz8v2rj1FatdYh3bMdJucUqJlXUpVK/EZSpYATwJkJV0NW9mhkO1r8zgs/Iat+0vxAWhhyn1lUnh33/PoQyw98fRGXRhLsIdfgD6MsvJqWJICzgZS6kQw1Oc2QkiwqEK2z2voVQahtqoZxK2lGHIoS1Di6ewxHEYPJRK+pwZ0mVzGOOads3CFssRgkE7NEzEXYaHFW3IZRH7P8hjopjZVufaPvtLfrXNvdcYmM7LlYQveO+2ygf7JuAuszRYsq3CL+FHdkFJ9e75sHJU21ZVdHDjUzHfY6w1OKHVW4rAeNHHiUI66PIRtFWK/nCdRLHMdmUCSvwKWE2o7mNgXRzOfDQTVROeOvcJIfhx76udR7bERYASvPr5A2vMntWh2sob63wREuZVITohtWi8TGb8yovtArEsDpvhiD8GfHORyJsti0IpRZXH9h++1v9K5sXJomN7biYjRgEh9Ryr+G5uBerEUrZhvBu2JHvWzwBjfylu/Os4JbwUJFu2LkJDjZpLFUs7HNEg8p6dYHlvqYMZpKOyLH+rOYrXuR6TqZdjcrBrXrAOlZpMkKZrQuHkpnuNZzlTdurKB/paivuFwhFlu/SFQh+g37iaYQqW4PZeQScRKtdfw8PWevaMR9hss2+XoSbX80EXFP2D9me2NiOg0lIRIN8svgd0e4iAN0p1Z1yX8hxVyAIaxxS/4/T36wWrVVaxWGGYyYgFFt69Z6OUB1X/lJUKhXF6IgPgGyO5HY+MqXVsfpUsJSvGM3/uJCetHEwpiWfG7CrDdkZP04+4aqwjMqknsMWhJIQq3M1g0zyQA4lSNBpw4x601XbE1Y7TtDeukeXGB4Qyn8tkkGrAT7sCzy/q8/7lu33H9JHhDtzJTK24+BlhEpPKlCqqBlj8oG+OuLnW66mm353NeUZ/Ag+ejucKxDVWi0yNsZvEnaORhCetvy2egYHzr+K6OOtbovyDQDQguO5lheYxhJL0dz88bGS73iHR7mSE2iX0kn+EnZuGmMRfLbmuj2owBhLMNpBjgn0ekCW+j8EuzJQk1GeCIqOCPZJiQK+/ML1hm0qwvn2CPetWmSdGaUwmF1trO33r0EQS+VdImM7Dh5AiCabpvsMRfCHqAcuCll/TtfBd5EipIfoo4wBlCo0U3lj57EIodjGIq8Ec5Xxoj1C9JnGzkfiWr5ksS/Hcw3P8wUrdYC/86eSv/mMEVxHnyTXfYKvEMtCti0ox85TDwLBENVeZicg2CcLUCvjgM/e7Rg9scy8jCCcpv9SjjH25sZsKhC2m96XKl1gpIjlWxEqbB7njwV/iTdsv68WH8tt9sYwthN9giu/2T3YnOB5YqUBlwOfh6RxWQv4tdhULxgNW8xFDuoJqHY6Md7Fl3QBBnM/8BwHAA+GeAkHKAICRjFlBvs6yrtQT+XYfwMfy1gWFDbrcwDtaKM/rS3DGLNpZ6hrvJWFLGQh8/jJpLd3hwPAMsrtMuqAIdWBmUwuA0oNq+gvWceeHMderLE4Xv1WgeWQilm3Niap5WHgxXM0MNfB3LgHfuBrtpu2VV/RnsOBRZYuN025AlhHJi0c3IDV+Yts9sY7tuPgzBhWkG5yY5giC9Sz7kcOZwwr8SFUsJDHHX2IFUfpZ57RGUGZ9LfRRl9rlq0yqiFCIKr76Zj6Q/XeLy73TXO6cwY38zwfsyCYHdpuLT6PF7mITq6Zy1QeLqtKW4sRVtj2onpPjTZtU2armyyPr0O1K0YW2xA22pxZqdQCLlIrcM4Yp7Tu5kDGT4nGSLnMVrgermWQRYjB9h2KUsd949A/8YztODgGs9Y4NdRhFVapZS6kOmlDBrlRr/WV/1BxyNZZCAF/tfWOpcYrEJ4E4DOEyAF6Aa6OYU0dP005lEHcxLN8xgpbYb2Ij7jehWzah9j0gDK9PGr7PZWEz3z9bo4Pve0E8pSpuHq79EkqvOQBAPY2Ce1WrfdrnYTRHqwswc7Vsurgw9pffW92IvxFDvOw144HVvt26RpjGNvuiN8pq/WjuZFCsFgnZ0PQ30tsfY/DUT4+m0K2XsI3NKEFUMIAg549nI3spcW7fYGSqO0BKnPH8iT31mY2G3Jl1OdAOnAgnTnMlFmtIadxGrCCyUziawe/dWfaA2UWPtXKsjDR5lu96QFMCbHD/sJvdKErB2nbtZlN5GvxWyk4f7A5t/o1lHOvipJfZNv6J/VkyaSLIfm0ki4qcKINmWC5ULifPOB2KikGB/FbvVS22+yNYWwnKnR5Man34R5gooXDnJ9oKyWYUQ74oeLbArozGyjh1AgJ5zYE+6AlGELcI6FWRrOiPt4NSpjHm9xNfwrZi348wKcmA9Q+XM3nrObpOCtstEeJuKH0ArbaOjMq23S49lqplax11ZsIaDKUu8ZXNudWE62J4d/LbY4cQE/ge/xgSnSgJrVdmIaireFaRg7mQuALxgMl4JCJTZ2/2GZvvGM7LsoRW+VHcvgQodjSMHIhsWWbDnCwg/h2YBR1k6ai/KAyEUf9rpm6Wn9ZE/KddOZGPg1zdfmJITEPpJE2GutNDgsNpee2Ui+2pAphleXLZ7L+TjbbEUpsp0sWVcFf9xwEsZFPC1iJUEknfsHszvmjrZ6gGuWCFFo0KYdfEMq0Q8k4xMFHuyWCvbddDGM7cfVI9VsqNZzNAOAWS+f6SghJYBAdauBaazcXhYnl4awCWoM2Z5REPF5xGnnAD+4FzSXAfJ7kZJpwLEMNifoOZhSruN8xt2ooLcGiGFNzmoKFkyNAJk+AjUJsLV8ChZbr2bX6aj3IB76zFY99bAC91CgCsFlaDGdv4EUWMhPoaZgbSux17oUG+l7MPEJX4G4tve0AhzxBfsD+TR3D2E58Uq8nlZO6La8A03QUdChFQMc47kkJZZEnrx3LgAY00WvzaF02Vam515LTUXFRwXTuYj+OYmTQtNKE/7Gch6NOWtUSNXjNKDXjGstvXEJn4A2bFJZKn3y2xZ61qGGu3DnthO/AddWEWAVYZwA4k0uAddwLzAAaGZJVrDbcgx3qtzfnfx/MTcDUoLZ9G9hmGg2MG7tXQhFRj+1da1Ln8C4FbLLN5LwOyIsjXkX9yPFP6uUA7E8VOyHK4d+RvsBaBw8j7/iOy2jJOUzRa+MC7uQvLolqtOwJlIZtVW6MVgO2kGFAsW3lxgkUAwMtHpUrgQa0pj/g7BuwFmhKLvAXPqBj2BEH6rzZl7AV+AIfGAymq/UxTig5zxgB/h9GAf9wQVDDsBmnSa307Ttt9sYwtnetSf0C3aniLNtamypWJZI9MTNs2qmI5fgdaFSwfgdU/onospY8RgYwNAnOH+5QxjhOpiOvak1rC0YyO4py802wmtRKNG4etj2DV2gI3GmbprCUD4HmFitatQAbQBdgjW0UMwQkhL2Acn6GoHdZgL2YQj4wkk8A2MJsMES6KxenI3FCWbYDD4JcHuF1sthKX4MCdiNQ11b/rRaBdpM63rEdF48iSEoKu90T4kZoxSLEURCDQqaHOTGOMDh6xoNKiTsMFTPjCwnZtGKgVkTVpOgqOwoZGSxdV86dEdpchlVQg+qh8JgrFWk3zfHlooJrXgnbvieCsDbY9/aoSGaVTOAhhC2m9XFLXUXyT0PwiIp1D/jgtdd3b63S7EdLIEO35FpO4kZd4m4b/zIdqXKXNMcalZz4XNu7iG9sx4XKjxy5DFmiKO1iJD37iwhVDgqF09iEUB7y86jooETc4tdo3e41UTnjtGUrQpllsZ6ayQE6LEIQpjtmpSvDurDqMoTikPfIBfgRVkbIcpfJKoSNFjrr1cE2OWe0PRdB9LpcBWxUJ//ppsvLFunoMIVyBKl+OKlCPA9bnPvf+NjCaQTCdY2hsaGuPEdbONhUczyC2FZbi3dsx4WqJXVI4idy5FwqEd6OuFxQgXPWT6s8ntHd/WFICMpchMTqBn6GCjfcBx/h2UzM7M0SBImygHvNYWAwAHSNQ6r9MqyDFNW7b6ThF1RlDbaZMltbM8zGTTOQgXVyhO8rB8xALPwk/Z3WtGOYjnjbHhZdNd/kLKritHaEZWy5Hh/CFg4Fshhh8Nf7zGL6qQeKXeIHFcJ7CnbEN7bjorpeY45t7GuiDMGHMD4K/7cMFiD4LFZgPXR501IuCtu3BkESygX2OIKwD4FAP/ug9R76zfBAkvoqmRQwNiiGn2FzTHjqXkW+jnubx3X05WKdLnerbTULI531AyEU5S/uj+jc2gRj4Gx7XTi3OoB1VZh92SyyQ309Rn4xCM+tmIAgbDa80jpwEy/wgE2hnzz82Fcu+bfNoytAfGM7DvbUOZznspBKWw1mYlyLH+GjKNftp2phyvguOYhx+BCElRZ+UhlUIfgTcpk9i0Do30FUIfi4zUIh0pSndVztfUnpqVRwji7n5rNJ8bsIu8Tye+tpXf1ZEFIu1p5fEDaF/UJZfMrWiDW7ALZiTLs10BSRPsFS/G+LH2Oy/1P0CNrI/QzkYt6iDEGYE0Npe5W52672iCrN6ORhHvvYjpo8unM5L/G9rgBU/YlU6DN2snTc02sxTLmn9HP4ZU7lWK7iq6BQZL0abKKft4mwD4LwLBAI0xBW8DSn0o48GtCGsxir81fs4BzX+ymVdAimMr7EYq+qvdHR8pt5PMx2/d2V3ByDelWJvydGfXwo0xGTk093vqCSKmY4iLtfIJQa/AmH6EQF1R8fz8aYxvlHxMbHIjpiHdsR2ZNBPMUcm5R4P/BqAvpjaxrqQiWPxfStDB61iEVaw5U2K3Kl20y0auBqJBgocKl+ilt9JkdwYtgVaKrjlqrCjEOBVAcP2363Hr0ZQLcYs+W0wk8iNZjvQ/CHLA9zI0xIFRhrVPodxLjgxC5lbBQGvlDexz6aLBpiHdu25HIcj/Nb2DT+hXE8oKsuux6oDXTgd4Qqro3ju//H+7o8dyW/MoqBDm8FlQpnRgxnt0KVaQmIk/vySvCdFPjs5D1TGfNdmfp6WpeEafBV5cltrvsuzEbYHHelMRUiHFuBqBzWImwOSTqRxxGczJFxZgV7lNASBLETy9i2IJ+zec8QZl/CHEZzAyfRxvCknYkkIdLoAooRNtMngXM0oiCKN0IjruITizyNsaFSE91l2JLLKdzLm4znHR5kQNLUiN7QgO8Jte4qVGT09y4nMVYGo75xfrsOpYTW6YiMSpLkZgWaCxD8rkRbRTe2QzphABOCQuRCRjHE1vP0PUT71LpFfZ107rddqKZUA3ZgLqNT22nGcoTwbB/HagFxKYNc7A1VF3JM3N+fhsQQFKsooAhho4vFmg9DEC9KIB7Ic7q21GbeYXDEPB5PIVS56Bt1tFbEvG6Zbavm8qyt8qi20k2r/kJX1vcGZbuH4zqvNT8jbI1bAFcVUmP1RXgYIZBfxQ3q40dSrSjtwyf49fqvX5QdeAuCxBXyGE5dnsaPUOTgLldTack2hK02mt/aySX6nRy6wjxPO6qcEddZrVGWY2PZo07cwJQo1Wf5lGBl63amEZsQSl30mFyG8KCLvWKBUSo/hOH0AlbzNCPDqt3bcx5vAj2YnXBrTuUZ2gLfc17Sk/wkgyGMAjbzAJNZTSMK6Ua+NnTVVj7jBGB4WAhpFj3ozAdxx74pk5Eff/DfbZkJvMlgWtCHPvTRgY6ltIgqhv1prqOCzjGWqPkvzwLjXXs8TeB0voii0poL1GOUfkPfGfMyXiUxTzT5YFtt4dzBtbtIITgr7g8zN5S7uCKrWWTRgL04Vbs+ePWpoojZfMy7vMozPMydXMvFnMUJdGd/mhukzZaUInwZ4+jK1sWRTnep1+5A2J7cEa7e1HWZySHAQgZFUQYslEJWAQ9G5dljTSNu5zrygE+50jHFX83nNB43hQbAwGAWyJpHAYUU0pImNKExTWhMY/KpQy51qEMdcmw0rJlkRTUwyymlnDIqqKSSKv3OBRVhLICQRWbwk0E2OSGfRJVtJRRRRBGXM4AHgftj9OfrxVdksIaOMUiv9vTmS6BLFAXs40b9ZEO5A5hLb4ucFdGwmSZMZEBc383jv9xBY2AZtzhkRd6VOJLDaQlsYAlzbPJ9eENT9mM/9qMdhRRS6KKZbSoL2MhmtrCNbexgB8WU6BQ98ZNLb/pxmkljs5qp/MkycqinP3WD/82ngAIKyLco+dqdX/mJg4BrYgxQfJErgNdc8azOp4hMLrcIJXUNNamX0YYqDjRkp4qN6fRkSRwZR+pyKbdSCBQzlCdjSOqbJnpa0pWudKE9+zlGegtFbA5OyyJ2UEwxO9jJTsrYSTkVlFNBBT58VOFD8CNAKbn0jyvloz1NOZV+nBB87FQxm6ncRgNm24RLmMmigAIa0pCGNKIhDXmV9XRgNvnAcO6wKf5uRT4LaQX8x6EKZ/QspCNvc56rvWWBz+DiGA/PEpr+PDL53KYT5VcwIqEIqTRW7M25DOcLNtisRTfxExN4nju4kOPpyp4JGCX/xs1A0gIuYIophmoUZ+g0QF8jlMVt1gI4XSd8WKDTIEVHT6oQdkQdgOLECIRNyU+PsR6hMoFa9JciCN2jPr4dT2lHtyrGxBTlkiYS7bmE11lmMY3X8BUvcQP96eyyB8CXRK4JGQ1Z9OfDYOE3YSEP0920qlf1SROL3h8UrEC5hAc4IspHxJ0I/rhclkNR+U+OSfxEzrypu3CvOL+vgtAjVQUEyKIvH2l9aTljXHnypQEoYBBjWBcykSuYyyiu5qiY0vzGymSEuxM8xz48YKjCPZebLV8y/RASL7F+rI5pDzg/RxPflMHrhjL0iZBPGZLMNbWisxZ2NjAkLtGmDmVIxLyY7RkaTECznSdccldJU4+zmRQSFriJCdxED3eLkdvyCYFSdfFxIh8HDWNLeDDEemCkOUIi0VoBGjIqmHetMuWZ4iYgFCXfX3JIUCRZxZ1xZDmaiVim11e04kZd5UAQFnG9Q6LUNLHQief1QibwZp7B3XRPsaV/CtXJgmIjm/8wX7d9By9GyNgJsBYxVAZLhAN4i0rEg2IKgxDEFVE+AoebgitncTc9YrAQqqLa4eL7/tzMzGAEaAXvu131fjemJ9NM0/lTLooij2kymI/E4dabyxU6JERYyDVRRnXNRGyLyMVOC66zzKiWXLJZhbAiFXJUFpcGc1qoTzEzeIKzo4iVUmud6joKufRhmM7BqD4/cJUbKdHSAHAY3xj6dj5XJXXN7EwGpUiMkeLZXMpKrSr9IEKVKjOvIUh8WT5qELchiEXd1qSQST/GW+Tt2MRnPMkl/Mtm8DTDj/AceRzNHUzV0TvqM4+7EtCspwmlMa8GZR8/45OvR43AvgiiSxdFQwZns1ivZl/TpeOi554YLS01k/qsZkSy5CprJ8D6HMdJnKTrJ4eynuWsYi3b2UYFkEEDCriKepSSbcjCUM5MPmZCjSgAV3voyRu00v//KXfzs9cN4nJeYhEdojz6cJ6nO1DJ6zzioIex41zeBk7VtTR2XRq64nQaB/tzIc8z2yHjltWngjkM56TUVdPdjbgyqCVe6pKBJXEmIVG6XTZjJH4EP2PjztSmUt67kgp39yaHrgzkJl7gU35mMWvYFjQImD8fcUx6MieN+4L9/EyM/nvJozGliEUCwnDOZwuCMCcqN087lE/EVV7f9u5BQ3wI47xuRi3mmqCN383UA4lyM8KGiN4NzRiPIKzj4lgza4XQxRX3kzRR8jNiW7swTaL01IL3phpVgSubpURO6Hey9nQb7YJ/QncE4VKvb3x3QaXd33VSBe5K5Gl9cVEcuaaTyZUIVY62jQzuxo+w3lDvORFUkbmLEz9RmmhQ5Vkv8LoZtZIrtOh9utcNMdGA9YhjOGJ9PkAQZrrmFKwKHJ2S+InSRIOyVcea2i1NNMxDEN7wuhkhvIBQyYG2+/fU1bNGJRQsaUaVTk6kQmmamFhI4uVr0oTTRPte7Zv4qVzkRAThcdv9rfgLQbjX1au+hCAeucPuloxAEENJsTTuoFI7Tve6GSYKWYOw0jYhUmPtJJxI9JYVsxCKvL753Ym+vMFltTZ7pnecmYQ3XmLU5yeEKtvCq5l8heB+yd5cnRE0TZpdHKWCrDm1P+rwCYJ9peVA4v13XL/yyQjmSpRp0uySHJeq+NuoyOVjBOF926jt/SlHWO5yiTyAsQie1KJKk8ZdVEn757xuBgD5TEUQZjhUd1beYwNdv3ZzyhAWeN0FadIkTgabkbgTOLvJPtpI9Z2Db9i++BAWJuHqwxGEC73uhDRp3OANhFiLprtPb+3u+aVjfq3bkqTWa6vf07tPseA0tZq+CMK3CQZDJEI2Q7X3+RgHwRvQ4rnbqRsy+ArBb6tvT5Nml+NnBOFyj65+mPZpq+S6iMcuiTETSnTcjiAM9+j+06RJAr11VdIjUn7lhjyj39F/cFgUxxchiMtR9YPwI8wy5NVJk6YWoNREG1Jq0MnlBjbpfDbDo5yo611/U3enFGEVLVN452nSpIBsbR8uSlGqwVwuD6bw/dghwX4os1xW6h3EOoQtdErJXadJk1Lq8rl+a96e5HT9jbmFNcEExH1i+q6SKB5zqSXHUoRQ5MGyI02alJDDq3qqTU9a+OGhvBpM8byEy2IuStMJQdjsSha18yhH2MShSbrXNGlqBBcEK4a+QjtXz9yaO1gQTG44gwFxygOTEIRHEmxNXZ7Ej/CHy3eZJk0NpBVv6XT+Pj7i5IRTEGRwCPdqo5US799M6N3Yiu0IvoRsyv/SCZw+T8dOp9ldOJQPgjnAtzCaM+KIY8/hYP7LB2w0JHmexX9pkXDrzsGPUBSVCSycJjyFD8HPU2n/sTS7F215yFBe3s98xnAdx9LaYSo04ED6cTMjmWMqf1vBNK6ljWttU84iW+kX4/ca8YBeXqzw3C12F8U7t8M07pDB4ZzCSRxiUmj5WMMWiiiiCj9+8mhAfZqyZ1g45E5+ZgbTmUmJyy27hwcAYQR3R5mrpCVXcJ0OFRnLtV4VpkmTpmZQn17cwuvMMdWrtv7sZBGTGMZguiS14PoQXbBpI7dHWBwUcC4TqQwuAbwu+rdLk35T10YKaMWeNKEJ9alDDlBJJSVsZQsbWM2mlLWkK2/TEYByvmQqc1jIjuDeLNrQicPoSY+gA+hf3MX7XndgmjRp7Mnheu1oGvhsYwl/8Cfrg4o+0Zr8KZyeVMkhTZo0LpHHxXxjU1JRdKjIQy4q6XZz0uJ3mlTRlF70oDP70oL6ZFDCJv7hD+Ywg2VeN6428f+zem0pSBJbegAAAABJRU5ErkJggg==",
    name: "Assoc. Prof. Dr.Somsak Sririkun",
    position: "Register"
  }
};
