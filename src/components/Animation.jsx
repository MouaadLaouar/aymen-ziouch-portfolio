import "../scss/Animation.scss"
import { useState } from "react";


const Animation = () => {

    const [anime, setanime] = useState("anime")

    setTimeout(() => {
        setanime("none")
    }, 4800)

    return (

        <div className={ anime }>
            <svg id="logo" width="332" height="37" viewBox="0 0 332 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_2_16" maskUnits="userSpaceOnUse" x="-0.114717" y="0.164422" width="332.259" height="36.6307" fill="black">
                    <rect fill="white" x="-0.114717" y="0.164422" width="332.259" height="36.6307"/>
                    <path d="M6.59816 31.7051L2.9051 31.6759L13.8172 2.67053L17.4534 2.69936L27.9043 31.874L24.2112 31.8448L15.7125 7.28797L15.4852 7.28617L6.59816 31.7051ZM8.05184 20.3527L22.9377 20.4707L22.913 23.5956L8.02706 23.4776L8.05184 20.3527Z"/>
                    <path d="M27.1974 2.7766L31.2314 2.80858L39.1917 16.4517L39.5326 16.4544L47.7082 2.9392L51.7421 2.97118L41.0955 19.9896L41.0005 31.9778L37.4779 31.9499L37.5729 19.9617L27.1974 2.7766Z"/>
                    <path d="M56.2981 3.00729L60.5025 3.04062L70.1971 27.266L70.538 27.2687L80.6155 3.20006L84.8199 3.23339L84.5893 32.3234L81.294 32.2973L81.4692 10.1957L81.1851 10.1934L71.9193 32.223L68.7375 32.1977L59.8221 10.0241L59.538 10.0218L59.3628 32.1234L56.0675 32.0973L56.2981 3.00729Z"/>
                    <path d="M91.6523 32.3794L91.8829 3.28938L109.439 3.42856L109.414 6.55346L95.3808 6.44221L95.3028 16.2714L108.427 16.3755L108.403 19.5004L95.2781 19.3963L95.1997 29.2824L109.461 29.3955L109.436 32.5204L91.6523 32.3794Z"/>
                    <path d="M138.856 3.66175L138.625 32.7518L135.216 32.7247L119.546 9.75887L119.261 9.75662L119.08 32.5968L115.558 32.5689L115.788 3.47889L119.197 3.50591L134.924 26.529L135.209 26.5313L135.39 3.63428L138.856 3.66175Z"/>
                    <path d="M155.958 32.8892L155.978 30.3324L171.845 7.04837L155.993 6.92271L156.018 3.7978L176.074 3.9568L176.054 6.51353L160.187 29.7976L176.039 29.9232L176.014 33.0481L155.958 32.8892Z"/>
                    <path d="M185.676 4.03291L185.446 33.1229L181.923 33.095L182.154 4.00499L185.676 4.03291Z"/>
                    <path d="M217.169 18.8285C217.144 21.8966 216.569 24.5436 215.444 26.7696C214.318 28.9956 212.784 30.707 210.843 31.9037C208.902 33.1005 206.691 33.6891 204.21 33.6694C201.729 33.6497 199.527 33.0262 197.605 31.7988C195.683 30.5714 194.177 28.8359 193.086 26.5924C191.996 24.3488 191.463 21.693 191.488 18.6249C191.512 15.5568 192.087 12.9098 193.212 10.6838C194.338 8.45778 195.872 6.7464 197.813 5.54963C199.754 4.35286 201.965 3.7643 204.446 3.78397C206.927 3.80364 209.129 4.42717 211.051 5.65457C212.973 6.88197 214.479 8.61745 215.57 10.861C216.66 13.1046 217.193 15.7604 217.169 18.8285ZM213.76 18.8015C213.779 16.2826 213.375 14.1534 212.546 12.4138C211.726 10.6743 210.605 9.3538 209.182 8.45234C207.769 7.55096 206.182 7.09329 204.42 7.07932C202.659 7.06536 201.06 7.49777 199.623 8.37656C198.196 9.25543 197.054 10.558 196.197 12.2842C195.35 14.0105 194.916 16.1331 194.896 18.6519C194.877 21.1708 195.276 23.3 196.096 25.0395C196.925 26.779 198.046 28.0995 199.459 29.0009C200.882 29.9024 202.474 30.3601 204.236 30.374C205.997 30.388 207.591 29.9556 209.019 29.0767C210.456 28.1979 211.598 26.8954 212.445 25.1691C213.301 23.4429 213.74 21.3203 213.76 18.8015Z"/>
                    <path d="M242.297 4.48177L245.82 4.50969L245.667 23.7705C245.651 25.759 245.169 27.5308 244.219 29.0858C243.278 30.6315 241.957 31.8474 240.255 32.7335C238.553 33.6102 236.561 34.0395 234.279 34.0214C231.997 34.0033 230.012 33.5425 228.324 32.6389C226.636 31.7259 225.329 30.4892 224.404 28.9288C223.488 27.359 223.038 25.5798 223.054 23.5912L223.207 4.33043L226.73 4.35836L226.579 23.335C226.568 24.7554 226.87 26.0221 227.487 27.135C228.103 28.2384 228.986 29.1119 230.136 29.7555C231.296 30.3897 232.686 30.7132 234.305 30.7261C235.924 30.7389 237.319 30.4374 238.488 29.8217C239.658 29.1965 240.555 28.3371 241.179 27.2435C241.813 26.1405 242.136 24.8789 242.147 23.4584L242.297 4.48177Z"/>
                    <path d="M276.191 13.8416L272.668 13.8137C272.468 12.7988 272.11 11.9058 271.596 11.1347C271.09 10.3636 270.47 9.71473 269.736 9.18806C269.011 8.65199 268.204 8.24786 267.316 7.97566C266.428 7.70346 265.501 7.56353 264.536 7.55588C262.774 7.54191 261.175 7.97433 259.738 8.85312C258.311 9.73198 257.169 11.0345 256.312 12.7607C255.465 14.487 255.032 16.6096 255.012 19.1285C254.992 21.6473 255.392 23.7765 256.211 25.516C257.04 27.2556 258.161 28.5761 259.575 29.4775C260.998 30.3789 262.59 30.8366 264.351 30.8506C265.317 30.8583 266.246 30.733 267.138 30.475C268.03 30.2169 268.843 29.8303 269.576 29.3153C270.319 28.7908 270.949 28.1471 271.467 27.3842C271.994 26.6118 272.365 25.7246 272.582 24.7225L276.104 24.7504C275.827 26.235 275.334 27.5616 274.624 28.7303C273.914 29.8989 273.035 30.891 271.986 31.7066C270.938 32.5127 269.764 33.1237 268.463 33.5395C267.172 33.9554 265.793 34.1576 264.325 34.146C261.844 34.1263 259.642 33.5028 257.72 32.2754C255.798 31.048 254.292 29.3125 253.202 27.0689C252.111 24.8254 251.578 22.1695 251.603 19.1014C251.627 16.0334 252.202 13.3863 253.328 11.1603C254.453 8.93433 255.987 7.22295 257.928 6.02618C259.87 4.82941 262.081 4.24086 264.562 4.26052C266.029 4.27216 267.406 4.49614 268.69 4.93248C269.984 5.36888 271.149 6.00314 272.184 6.83523C273.219 7.65786 274.082 8.65905 274.774 9.83881C275.465 11.0091 275.937 12.3434 276.191 13.8416Z"/>
                    <path d="M281.724 33.8861L281.955 4.79615L285.478 4.82407L285.375 17.7782L300.886 17.9012L300.989 4.94703L304.511 4.97496L304.281 34.065L300.758 34.037L300.861 21.0261L285.35 20.9031L285.247 33.9141L281.724 33.8861Z"/>
                    <path d="M311.333 34.1209L311.564 5.03086L329.12 5.17004L329.095 8.29494L315.061 8.18369L314.983 18.0129L328.108 18.117L328.083 21.2419L314.959 21.1378L314.88 31.0239L329.141 31.1369L329.116 34.2618L311.333 34.1209Z"/>
                </mask>
                    <path id="test" d="M6.59816 31.7051L2.9051 31.6759L13.8172 2.67053L17.4534 2.69936L27.9043 31.874L24.2112 31.8448L15.7125 7.28797L15.4852 7.28617L6.59816 31.7051ZM8.05184 20.3527L22.9377 20.4707L22.913 23.5956L8.02706 23.4776L8.05184 20.3527Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M27.1974 2.7766L31.2314 2.80858L39.1917 16.4517L39.5326 16.4544L47.7082 2.9392L51.7421 2.97118L41.0955 19.9896L41.0005 31.9778L37.4779 31.9499L37.5729 19.9617L27.1974 2.7766Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M56.2981 3.00729L60.5025 3.04062L70.1971 27.266L70.538 27.2687L80.6155 3.20006L84.8199 3.23339L84.5893 32.3234L81.294 32.2973L81.4692 10.1957L81.1851 10.1934L71.9193 32.223L68.7375 32.1977L59.8221 10.0241L59.538 10.0218L59.3628 32.1234L56.0675 32.0973L56.2981 3.00729Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M91.6523 32.3794L91.8829 3.28938L109.439 3.42856L109.414 6.55346L95.3808 6.44221L95.3028 16.2714L108.427 16.3755L108.403 19.5004L95.2781 19.3963L95.1997 29.2824L109.461 29.3955L109.436 32.5204L91.6523 32.3794Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M138.856 3.66175L138.625 32.7518L135.216 32.7247L119.546 9.75887L119.261 9.75662L119.08 32.5968L115.558 32.5689L115.788 3.47889L119.197 3.50591L134.924 26.529L135.209 26.5313L135.39 3.63428L138.856 3.66175Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M155.958 32.8892L155.978 30.3324L171.845 7.04837L155.993 6.92271L156.018 3.7978L176.074 3.9568L176.054 6.51353L160.187 29.7976L176.039 29.9232L176.014 33.0481L155.958 32.8892Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M185.676 4.03291L185.446 33.1229L181.923 33.095L182.154 4.00499L185.676 4.03291Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M217.169 18.8285C217.144 21.8966 216.569 24.5436 215.444 26.7696C214.318 28.9956 212.784 30.707 210.843 31.9037C208.902 33.1005 206.691 33.6891 204.21 33.6694C201.729 33.6497 199.527 33.0262 197.605 31.7988C195.683 30.5714 194.177 28.8359 193.086 26.5924C191.996 24.3488 191.463 21.693 191.488 18.6249C191.512 15.5568 192.087 12.9098 193.212 10.6838C194.338 8.45778 195.872 6.7464 197.813 5.54963C199.754 4.35286 201.965 3.7643 204.446 3.78397C206.927 3.80364 209.129 4.42717 211.051 5.65457C212.973 6.88197 214.479 8.61745 215.57 10.861C216.66 13.1046 217.193 15.7604 217.169 18.8285ZM213.76 18.8015C213.779 16.2826 213.375 14.1534 212.546 12.4138C211.726 10.6743 210.605 9.3538 209.182 8.45234C207.769 7.55096 206.182 7.09329 204.42 7.07932C202.659 7.06536 201.06 7.49777 199.623 8.37656C198.196 9.25543 197.054 10.558 196.197 12.2842C195.35 14.0105 194.916 16.1331 194.896 18.6519C194.877 21.1708 195.276 23.3 196.096 25.0395C196.925 26.779 198.046 28.0995 199.459 29.0009C200.882 29.9024 202.474 30.3601 204.236 30.374C205.997 30.388 207.591 29.9556 209.019 29.0767C210.456 28.1979 211.598 26.8954 212.445 25.1691C213.301 23.4429 213.74 21.3203 213.76 18.8015Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M242.297 4.48177L245.82 4.50969L245.667 23.7705C245.651 25.759 245.169 27.5308 244.219 29.0858C243.278 30.6315 241.957 31.8474 240.255 32.7335C238.553 33.6102 236.561 34.0395 234.279 34.0214C231.997 34.0033 230.012 33.5425 228.324 32.6389C226.636 31.7259 225.329 30.4892 224.404 28.9288C223.488 27.359 223.038 25.5798 223.054 23.5912L223.207 4.33043L226.73 4.35836L226.579 23.335C226.568 24.7554 226.87 26.0221 227.487 27.135C228.103 28.2384 228.986 29.1119 230.136 29.7555C231.296 30.3897 232.686 30.7132 234.305 30.7261C235.924 30.7389 237.319 30.4374 238.488 29.8217C239.658 29.1965 240.555 28.3371 241.179 27.2435C241.813 26.1405 242.136 24.8789 242.147 23.4584L242.297 4.48177Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M276.191 13.8416L272.668 13.8137C272.468 12.7988 272.11 11.9058 271.596 11.1347C271.09 10.3636 270.47 9.71473 269.736 9.18806C269.011 8.65199 268.204 8.24786 267.316 7.97566C266.428 7.70346 265.501 7.56353 264.536 7.55588C262.774 7.54191 261.175 7.97433 259.738 8.85312C258.311 9.73198 257.169 11.0345 256.312 12.7607C255.465 14.487 255.032 16.6096 255.012 19.1285C254.992 21.6473 255.392 23.7765 256.211 25.516C257.04 27.2556 258.161 28.5761 259.575 29.4775C260.998 30.3789 262.59 30.8366 264.351 30.8506C265.317 30.8583 266.246 30.733 267.138 30.475C268.03 30.2169 268.843 29.8303 269.576 29.3153C270.319 28.7908 270.949 28.1471 271.467 27.3842C271.994 26.6118 272.365 25.7246 272.582 24.7225L276.104 24.7504C275.827 26.235 275.334 27.5616 274.624 28.7303C273.914 29.8989 273.035 30.891 271.986 31.7066C270.938 32.5127 269.764 33.1237 268.463 33.5395C267.172 33.9554 265.793 34.1576 264.325 34.146C261.844 34.1263 259.642 33.5028 257.72 32.2754C255.798 31.048 254.292 29.3125 253.202 27.0689C252.111 24.8254 251.578 22.1695 251.603 19.1014C251.627 16.0334 252.202 13.3863 253.328 11.1603C254.453 8.93433 255.987 7.22295 257.928 6.02618C259.87 4.82941 262.081 4.24086 264.562 4.26052C266.029 4.27216 267.406 4.49614 268.69 4.93248C269.984 5.36888 271.149 6.00314 272.184 6.83523C273.219 7.65786 274.082 8.65905 274.774 9.83881C275.465 11.0091 275.937 12.3434 276.191 13.8416Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M281.724 33.8861L281.955 4.79615L285.478 4.82407L285.375 17.7782L300.886 17.9012L300.989 4.94703L304.511 4.97496L304.281 34.065L300.758 34.037L300.861 21.0261L285.35 20.9031L285.247 33.9141L281.724 33.8861Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
                    <path d="M311.333 34.1209L311.564 5.03086L329.12 5.17004L329.095 8.29494L315.061 8.18369L314.983 18.0129L328.108 18.117L328.083 21.2419L314.959 21.1378L314.88 31.0239L329.141 31.1369L329.116 34.2618L311.333 34.1209Z" stroke="white" stroke-width="4" mask="url(#path-1-outside-1_2_16)"/>
            </svg>

        </div>
    );
}




export default Animation