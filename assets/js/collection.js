const collection = [
    {
        "id": 1,
        "title": "Let There Be Rock",
        "artist": "AC/DC",
        "year": 1977,
        "style": "Hard Rock",
        "country": "USA",
        "img": {
            "url": "https://i.discogs.com/pNX0PEQA7FeuYeRzt8TrGIG9nJ2h5Cyx0uae_q09XjM/rs:fit/g:sm/q:90/h:594/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2ODY4/Ni0xMzI5NDE1NzA4/LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/pNX0PEQA7FeuYeRzt8TrGIG9nJ2h5Cyx0uae_q09XjM/rs:fit/g:sm/q:90/h:594/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2ODY4/Ni0xMzI5NDE1NzA4/LmpwZWc.jpeg",
            "alt": "Let There Be Rock"
        }
    },
    {
        "id": 2,
        "title": "The Wall",
        "artist": "Pink Floyd",
        "year": 1979,
        "style": "Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/L_VyYyJq5qz9dKeMRuRSGg3ftbl-sadWu4oaJotdn-M/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNDE2/MTgtMTM5MDY3OTAy/NS0yMzcyLmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/L_VyYyJq5qz9dKeMRuRSGg3ftbl-sadWu4oaJotdn-M/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNDE2/MTgtMTM5MDY3OTAy/NS0yMzcyLmpwZWc.jpeg",
            "alt": "The Wall"
        }
    },
    {
        "id": 3,
        "title": "Abbey Road",
        "artist": "The Beatles",
        "year": 1969,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/M2yc5OJZPdVoDm2_UlRRXuDlDguamLLSdnbziNmZoQI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDc0/MjQtMTYzMDYwMTA4/Ny0xMTk5LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/M2yc5OJZPdVoDm2_UlRRXuDlDguamLLSdnbziNmZoQI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDc0/MjQtMTYzMDYwMTA4/Ny0xMTk5LmpwZWc.jpeg",
            "alt": "Abbey Road"
        }
    },
    {
        "id": 4,
        "title": "Hotel California",
        "artist": "Eagles",
        "year": 1976,
        "style": "Classic Rock",
        "country": "USA",
        "img": {
            "url": "https://i.discogs.com/PZz0RZth-jDXq_vEwv640MTGizMZe5KEc6KTzM6ZKzY/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTQ4/MTYtMTM4MzkwOTE3/MC0xNzEyLmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/PZz0RZth-jDXq_vEwv640MTGizMZe5KEc6KTzM6ZKzY/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTQ4/MTYtMTM4MzkwOTE3/MC0xNzEyLmpwZWc.jpeg",
            "alt": "Hotel California"
        }
    },
    {
        "id": 5,
        "title": "No Life 'Til Leather",
        "artist": "Metallica ",
        "year": 1982,
        "style": "Heavy Metal",
        "country": "USA",
        "img": {
            "url": "https://i.discogs.com/BJKpXxZUhzJ_l2Xcgox0UhT0GkYL3tPKPb9IfmjLkNI/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5OTM5/NzAtMTU2MzU2ODEx/OC03MTg4LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/BJKpXxZUhzJ_l2Xcgox0UhT0GkYL3tPKPb9IfmjLkNI/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5OTM5/NzAtMTU2MzU2ODEx/OC03MTg4LmpwZWc.jpeg",
            "alt": "No Life 'Til Leather"
        }
    },
    {
        "id": 6,
        "title": "The Dark Side Of The Moon",
        "artist": "Pink Floyd",
        "year": 1973,
        "style": "Psychedelic Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/9TFRqx1yW7EkC71l42QR2UEjnSWzcXT5TGDsfWxT4xE/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NzMw/MTMtMTY2NzIwODk0/MC01NTc3LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/9TFRqx1yW7EkC71l42QR2UEjnSWzcXT5TGDsfWxT4xE/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NzMw/MTMtMTY2NzIwODk0/MC01NTc3LmpwZWc.jpeg",
            "alt": "The Dark Side Of The Moon"
        }
    },
    {
        "id": 7,
        "title": "Back In Black",
        "artist": "AC/DC",
        "year": 1980,
        "style": "Hard Rock",
        "country": "USA",
        "img": {
            "url": "https://i.discogs.com/xf2PKezzQ243HuyRnERV8RTSzX_r9Nni7QZactGZjQY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMDU5/MS0xNTM3MDM1ODI5/LTEzOTEuanBlZw.jpeg",
            "url2x": "https://i.discogs.com/xf2PKezzQ243HuyRnERV8RTSzX_r9Nni7QZactGZjQY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMDU5/MS0xNTM3MDM1ODI5/LTEzOTEuanBlZw.jpeg",
            "alt": "Back In Black"
        }
    },
    {
        "id": 8,
        "title": "The Doors",
        "artist": "The Doors",
        "year": 1967,
        "style": "Psychedelic Rock",
        "country": "USA",
        "img": {
            "url": "https://i.discogs.com/DHwFRS-I_CPywWRempu2oYj9bxdEOKTaMbNuhRtSfq4/rs:fit/g:sm/q:90/h:398/w:398/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzOTUz/MTctMTMyODczNDAx/MC5qcGVn.jpeg",
            "url2x": "https://i.discogs.com/DHwFRS-I_CPywWRempu2oYj9bxdEOKTaMbNuhRtSfq4/rs:fit/g:sm/q:90/h:398/w:398/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzOTUz/MTctMTMyODczNDAx/MC5qcGVn.jpeg",
            "alt": "The Doors"
        }
    },
    {
        "id": 9,
        "title": "A Night At The Opera",
        "artist": "Queen",
        "year": 1975,
        "style": "Hard Rock, Classic Rock, Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/2GXnNYolz0ciUnj8-ycSwQ8Uuy0Qu7LCfiZivZ0p_bo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMjc4/MC0xNTQxMzY3MTQ1/LTIxMjcuanBlZw.jpeg",
            "url2x": "https://i.discogs.com/2GXnNYolz0ciUnj8-ycSwQ8Uuy0Qu7LCfiZivZ0p_bo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMjc4/MC0xNTQxMzY3MTQ1/LTIxMjcuanBlZw.jpeg",
            "alt": "A Night At The Opera"
        }
    },
    {
        "id": 10,
        "title": "Help!",
        "artist": "The Beatles",
        "year": 1965,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/wyiiDpeIjMSdlkjX6At93SVQxYNzUkVooD7krBZrg0s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTczNTU2/NC0xNjIyMDU0OTY0/LTE3MjkuanBlZw.jpeg",
            "url2x": "https://i.discogs.com/wyiiDpeIjMSdlkjX6At93SVQxYNzUkVooD7krBZrg0s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTczNTU2/NC0xNjIyMDU0OTY0/LTE3MjkuanBlZw.jpeg",
            "alt": "Help!"
        }
    },
    {
        "id": 11,
        "title": "True Blue",
        "artist": "Madonna",
        "year": 1986,
        "style": "Pop Rock, Dance-pop",
        "country": "USA",
        "img": {
            "url": "https://i.discogs.com/CmjuBR46ZVzDrwGTCBm6sWXt0A4Zh-lOPaK0x2w-YuM/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NzIy/Mi0xNDE4ODg2Mzg0/LTQzMzUuanBlZw.jpeg",
            "url2x": "https://i.discogs.com/CmjuBR46ZVzDrwGTCBm6sWXt0A4Zh-lOPaK0x2w-YuM/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NzIy/Mi0xNDE4ODg2Mzg0/LTQzMzUuanBlZw.jpeg",
            "alt": "True Blue"
        }
    },
    {
        "id": 12,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 13,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 14,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 15,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 16,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 17,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 18,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 19,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 20,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    },
    {
        "id": 21,
        "title": "A Hard Day's Night",
        "artist": "The Beatles",
        "year": 1964,
        "style": "Pop Rock",
        "country": "England",
        "img": {
            "url": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "url2x": "https://i.discogs.com/E0d3Hqblw-xCaFr60c2Z-yetYRxx2fcQ4dD9AHfOd9o/rs:fit/g:sm/q:90/h:595/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTM2/NDQtMTM5MTY5NTg1/Ni0xNTE0LmpwZWc.jpeg",
            "alt": "A Hard Day's Night"
        }
    }
]

export default collection;
