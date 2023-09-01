// 蜜雪冰城
const abcStr1 = `X:1
                T:Mixue
                L:1/8
                Q:1/4=112
               M:2/4
               I:linebreak $
               K:G 
               z4 | z4 | z4 | z4 | z4 | z4 | z4 | z4 | z2 z G/A/ | Bd d>e |$ dB G>A | BB AG | A3 G/A/ | Bd d>e | 
               dB GA | BB AA | G3 G/A/ | Bd d>e |$ dB G>A | BB AG | A3 G/A/ | Bd d>e | dB GA | BB AA | G4 | 
               c2 c2 |$ e e2 e | dd BG | A3 G/A/ | Bd d>e | dB GA | BB AA | G4 | z4 | z4 |] `  

// 樱花    
const abcStr2 = `X:1
                T:樱花
                L:1/4
                Q:1/4=69
                M:4/4
                I:linebreak $
                K:C
                z4 | z4 | z4 | z4 | d d e2 | d d e2 | d e f e |$ d e/d/ B2 | A F A B | A A/F/ E2 | d d e2 | 
                d d e2 | d e f e |$ d e/d/ B2 | A F A B | A A/F/ E2 | d d e2 | d d e2 |$ A B e/d/ B | A3 z | z4 | 
                z4 | z4 | z4 | z4 | z4 |]` 
// 大鱼海棠                            
const abcStr3 = `X:1
                T:大鱼海棠
                L:1/8
                Q:1/4=70        
                M:4/4
                I:linebreak $
                K:C
                z8 | z8 | z8 | z8 | z8 | z8 | z8 | z8 | z8 |$ z8 | z8 | z8 |!p! D!<(!FFG GA A(c/d/) | 
                c3 A!<)! G4 | DFFG GA A2- |$ AD C6 | D!<(!FFG GA A!<)!c/d/ | c3 A G4 | GA D2!>(! GADC | 
                !>)! D6 DF |$!<(! G3 F D2!<)! DF | G3 F GAAc | d2 dc AG!>(! F2 | G>A-!>)! A4 D!f!F | G3 F D2 DF |$ 
                G2 F2 G2 A2 | GA D2 GADC | D6 Ac |!f! f3 e A2 AG | F2 FG A2 AG |$ F2 df edcG | A6 Ac | 
                !f! f3 e A2 AG | F2 FG G2!>(! A2 | GA D2 GA!>)! D2 |$ C D3- D4 |!p! AGAd AGAe | AGAf e2 c2 | 
                AGAd AGAe | c2 F2 E4 |$!p! DFFG GA Ac/d/ | c3 A G4 |!<(! DFFG GA!<)! A2- | AD C6 |$ 
                DFFG GA Ac/d/ | c3 A G4 | GA D2 GADC | D6 DF |!f! G3 F D2 DF |$!<(!!<(! G3 F GA!<)!!<)!Ac | 
                d2 dc AG F2 | G>A- A4 DF | G3 F D2 DF | G2 F2 G2 A2 |$ GA!>(! D2 GADC |!>)! D6 Ac | 
                !f! f3 e A2 AG | F2 FG A2 AG | F2 df edcG |$ A6 Ac | f3 e A2 AG | F2 FG G2 A2 | GA D2 GADC | 
                D6 Ac |$!<(! d2 d/e/d/c/ d2!<)! c2 | A6 Ac | d2 d/e/d/c/ d2 e2 | f6 de |$ f4 g4 | e4 f4 | 
                ga d2 ga d2 | c2!p! !fermata!d6 | z8 |] `  
// 桔梗谣
const abcStr4 = `X:1
                T:桔梗谣
                L:1/8
                Q:1/4=120
                M:3/4
                I:linebreak $
                K:G
                z6 | z6 | z6 | z6 | z6 | z6 | z6 | z6 | B2 B2 B2 |$ B2 B2 AB | d2 d2  ed | B3 A G2 | {B}B4 B2 | 
                AB AG ED | E2 G3 E | D6 |$ B2 B4 | B2 B2 AB | d2 d2 ed | B3 A G2 |{A} B4 B2 | AB AG ED | 
                E2 G3 E |$ D6 | ED EG ED | ED EG ED | G2 G3 A | G6 | B2 B2 B2 | B3 A G2 |$ d2 d2 ed | B3 A G2 | 
                {A} B4 B2 | AB AG ED |$ E2 G3 E | D6 | z6 | z6 | z6 |] ` 
// 金孔雀
const abcStr5 = `X:1
                T:金孔雀
                L:1/8
                Q:1/4=72
                M:2/4
                I:linebreak $
                K:C
                z4 | z4 | z4 | z4 | z4 | z4 | EC EG | G''4 | EA, CD | D4 |$ EC EG | CA, A,2 | DC A,C | C4 | GE GA | 
                A4 | E2 C2 | G4 | A,2 EE |$ CD D2 | CA, CD | D4 | A,2 EE | CD D2 | EC A,C | C4 | z4 | z4 | z4 |$ 
                z4 | EC EG | G4 | EA, CD | D4 | EC EG | CA, A,2 | DC A,C | C4 |$ GE GA | A4 | E2 C2 | G4 | 
                A,2 EE | CD D2 | CA, CD | D4 |$ A,2 EE | CD D2 | EC A,C | C4 | z4 | z4 | z4 | z4 | z4 |]`
                
                
const abcStr6 = `X:1
            T:我和我的祖国
            Z:大雅乐盟%%score [ 1 2 3 4 5 ] [ 6 7 8 9 ] [ 10 11 12 13 ] [ 14 15 16 ]
            L:1/8=66
            Q:3/8=66
            M:6/8
            I:linebreak $
            K:C
            V:1 treble nm="Flute" snm="Fl."
            V:2 treble transpose=-2 nm="Clarinet in Bb 1" snm="Cl.1"
            V:3 treble transpose=-2 nm="Clarinet in Bb 2" snm="Cl.2"
            V:4 treble transpose=-9 nm="Alto Saxophone" snm="A.Sax."
            V:5 treble transpose=-14 nm="Tenor Saxophone" snm="T. Sax."
            V:6 treble transpose=-7 nm="Horn in F 1.3" snm="Hn.1.3"
            V:7 treble transpose=-7 nm="Horn in F 2.4" snm="Hn.2.4"
            V:8 treble transpose=-2 nm="Trumpet in Bb 1" snm="Tpt.1"
            V:9 treble transpose=-2 nm="Trumpet in Bb 2" snm="Tpt.2"
            V:10 bass nm="Trombone 1" snm="Tbn.1"
            V:11 bass nm="Trombone 2" snm="Tbn.2"
            V:12 bass nm="Euphonium" snm="Euph."
            V:13 bass nm="Tuba" snm="Tba."
            V:14 perc stafflines=1 nm="Snare Drum" snm="S. D."
            K:none
            I:percmap E B 64 normal
            V:15 perc stafflines=1 nm="Bass Drum" snm="B. D."
            K:none
            I:percmap E B 64 normal
            V:16 perc stafflines=1 nm="Crash Cymbals" snm="Cym."
            K:none
            I:percmap E B 64 normal
            V:1
            !f! c'/c'/d'/d'/e'/e'/ d'/d'/c'/c'/a/a/ |[M:9/8] ba>e g3- g3 | 
            [M:6/8] c'/c'/d'/d'/e'/e'/ d'/d'/c'/c'/a/a/ |[M:9/8] bg>e a3- a3 |$[M:6/8]!mf! (gfe d3) | 
            (BAG) e3 |!f! f3 d2 c |!>(! c3-!>)! c3 |"^A" z6 |!mf! (.c/.c/.e/.e/.g/.g/ .c'/.c'/.g/.g/.e/.e/) |$ 
            z6 | (.d/.d/.g/.g/.b/.b/ .d'/.d'/.b/.b/.g/.g/) | z6 | (.d/.d/.f/.f/.a/.a/ .d'/.d'/.a/.a/.f/.f/) | 
            z6 |$ (.e/.e/.g/.g/.b/.b/ .e'/.e'/.b/.b/.g/.g/) |"^B"!mf! (gag) (fed) | c3 G3 | cec' bd'>c' | 
            a3- a3 | z3 (Gcd) |$ e3 (eac') | bag d'f'>e' | c'3- c'3 | 
            "^C"!f! c'/c'/d'/d'/e'/e'/ d'/d'/c'/c'/a/a/ |[M:9/8] ba>e g3- g3 |$ 
            [M:6/8] c'/c'/d'/d'/e'/e'/ d'/d'/c'/c'/a/a/ |[M:9/8] bg>e a3- a3 |[M:6/8]!mf! (gfe d3) | (BAG) e3 | 
            !f! f3 d2 c |$!>(! c3-!>)! c3 |"^D" z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 |"^E"!mf! gag fed | 
            c3 G3 | cec' bd'>c' | a3- a3 | z6 |$ z6 | z6 | z6 ||"^F"!f! c'/c'/d'/d'/e'/e'/ d'/d'/c'/c'/a/a/ | 
            [M:9/8] ba>e g3- g3 |$[M:6/8] c'/c'/d'/d'/e'/e'/ d'/d'/c'/c'/a/a/ |[M:9/8] bg>e a3- a3 | 
            [M:6/8]!mf! (gfe d3) | (BAG e3) |$!<(! g3 d'2!<)! c' |!f! c'c'/c'/c' c'c'c' | c'c'/c'/c' c'c'c' | 
            c' z z c' z z |!ff! !fermata!c'6 |] 
            V:2
            [K:D]
            [M:6/8]!mf! (agf e3) | (cBA) f3 |!f! g3 e2 d |!>(! d3-!>)! d3 | z6 | z6 |$ z6 | z6 | z6 | z6 | 
            z6 |$ z6 |!mf! (ABA) (GFE) | D3 A,3 | DFd ce>d | B3- B3 | z6 |$ z6 | z6 | z6 |!f! def edB | 
            [M:9/8] cB>F A3- A3 |$[M:6/8] def edB |[M:9/8] cA>F B3- B3 |[M:6/8]!mf! (agf e3) | (cBA) f3 | 
            !f! g3 e2 d |$!>(! d3-!>)! d3 | z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 |!mf! ABA GFE | D3 A,3 | 
            DFd ce>d | B3- B3 | z6 |$ z6 | z6 | z6 ||!f! def edB |[M:9/8] cB>F A3- A3 |$[M:6/8] def edB | 
            [M:9/8] cA>F B3- B3 |[M:6/8]!mf! (agf e3) | (cBA F3) |$!<(! A3 a2!<)! a |!f! aa/a/a aaa | 
            aa/a/a aaa | d z z d z z |!ff! !fermata!d6 |] 
            V:3
            [K:D]!f! ABd cBF |[M:9/8] AG>C F3- F3 |[M:6/8] ABd cBF |[M:9/8] AF>C G3- G3 |$ 
            [M:6/8]!mf! (AGF E3) | (cBA) f3 |!f! e3 c2 d |!>(! d3-!>)! d3 | z6 | z6 |$ z6 | z6 | z6 | z6 | 
            z6 |$ z6 |!mf! (ABA) (GFE) | D3 A,3 | DFd ce>d | B3- B3 | z6 |$ z6 | z6 | z6 |!f! ABd cBF | 
            [M:9/8] AG>C F3- F3 |$[M:6/8] ABd cBF |[M:9/8] AF>C G3- G3 |[M:6/8]!mf! (AGF E3) | (cBA) f3 | 
            !f! e3 c2 d |$!>(! d3-!>)! d3 | z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 |!mf! ABA GFE | D3 A,3 | 
            DFd ce>d | B3- B3 | z6 |$ z6 | z6 | z6 ||!f! ABd cBF |[M:9/8] AG>C F3- F3 |$[M:6/8] ABd cBF | 
            [M:9/8] AF>C G3- G3 |[M:6/8]!mf! (AGF E3) | (cBA F3) |$!<(! A3 [ce]2!<)! [df] | 
            !f! [df][df]/[df]/[df] [df][df][df] | [df][df]/[df]/[df] [df][df][df] | d z z d z z | 
            !ff! !fermata!d6 |] 
            V:4
            [K:A]!f! abc' baf |[M:9/8] gf>c e3- e3 |[M:6/8] abc' baf |[M:9/8] ge>c f3- f3 |$ 
            [M:6/8]!mf! (edc B3) | (GFE) c3 |!f! d3 B2 A |!>(! A3-!>)! A3 | z6 | z6 |$ z6 | z6 | z6 | z6 | 
            z6 |$ z6 |!mf! (efe) (dcB) | A3 E3 | Aca gb>a | f3- f3 | z6 |$ z6 | z6 | z6 |!f! abc' baf | 
            [M:9/8] gf>c e3- e3 |$[M:6/8] abc' baf |[M:9/8] ge>c f3- f3 |[M:6/8]!mf! (edc B3) | (GFE) c3 | 
            !f! d3 B2 A |$!>(! A3-!>)! A3 | z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 |!mf! efe dcB | A3 E3 | 
            Aca gb>a | f3- f3 | z6 |$ z6 | z6 | z6 ||!f! abc' baf |[M:9/8] gf>c e3- e3 |$[M:6/8] ABc BAF | 
            [M:9/8] GE>C F3- F3 |[M:6/8]!mf! (edc B3) | (gfe c3) |$!<(! E3 d2!<)! c |!f! cc/c/c ccc | 
            cc/c/c ccc | c z z ^B z z |!ff! !fermata!c6 |] 
            V:5
            [K:D]!f! D3 E3 |[M:9/8] A3 cBA GFE |[M:6/8] D3 E3 |[M:9/8] A3 BAG FED |$[M:6/8]!mf! A3 (EAB | 
            c3) FAB |!f! e3 g2 f |!>(! f3-!>)! f3 |!mf! (aba) (gfe) | d3 A3 |$ dfd' c'b>f | a3- a3 | 
            (bc'b) (agf) | e3 B3 | cBA ad>e |$ f3- f3 |!mf! (aba) (gfe) | d3 A3 | dfd' c'e'>d' | b3- b3 | 
            (d'c'b a3) |$ (bag f3) | (cBA f3) | d3- d3 |!f! D3 E3 |[M:9/8] A3 cBA GFE |$[M:6/8] D3 E3 | 
            [M:9/8] A3 BAG FED |[M:6/8]!mf! A3 (EAB | c3) FAB |!f! e3 g2 f |$!>(! f3-!>)! f3 | z6 | z6 | z6 | 
            z6 | z6 | z6 |$ z6 | z6 |!mf! aba gfe | d3 A3 | dfd' c'e'>d' | b3- b3 | z6 |$ z6 | z6 | z6 || 
            !f! D3 E3 |[M:9/8] A3 cBA GFE |$[M:6/8] D3 E3 |[M:9/8] A3 BAG FED |[M:6/8]!mf! A3 EAB | c3 FAB |$ 
            !<(! e3 g2!<)! f |!f! ff/f/f fff | ff/f/f fff | f z z ^e z z |!ff! !fermata!f6 |] 
            V:6
            [K:G]!f! z GG z AA |[M:9/8] z FF FF/F/F FFF |[M:6/8] z GG z AA |[M:9/8] z FF GG/G/G GGG |$ 
            [M:6/8]!mf! z GG z FF | z FF z GG |!f! z AA z F/F/F |!>(! z GG z G!>)!G | z!mf! GG z FF | 
            z GG z GG |$ z GG z FF | z F/F/F FFF | z GG z GG | z AA z AA | z FF z FF |$ z F/F/F FFF | 
            z!mf! GG z FF | z G/G/G GGG | z GG z AA | z G/G/G GGG | z GG z GG |$ z GG z GG | z FF z FF | 
            z G/G/G GGG |!f! z GG z AA |[M:9/8] z FF FF/F/F FFF |$[M:6/8] z GG z AA |[M:9/8] z FF GG/G/G GGG | 
            [M:6/8]!mf! z GG z FF | z FF z GG |!f! z AA z A/A/A |$!>(! z GG z G!>)!G | z!mf! GG z FF | 
            z GG z GG | z GG z FF | z F/F/F FFF | z GG z GG | z AA z AA |$ z FF z FF | z F/F/F FFF | 
            z GG z FF | z G/G/G GGG | z GG z AA | z G/G/G GGG | z GG z GG |$ z GG z GG | z FF z FF | 
            z G/G/G GGG ||!f! z GG z AA |[M:9/8] z AA AA/A/A AAA |$[M:6/8] z GG z AA | 
            [M:9/8] z FF GG/G/G GGG |[M:6/8]!mf! z GG z FF | z FF z GG |$!<(! z F/F/F F2!<)! z | 
            !f! GG/G/G GGG | GG/G/G GGG | G z z G z z |!ff! !fermata!G6 |] 
            V:7
            [K:G]!f! z B,B, z CC |[M:9/8] z B,B, CC/C/C CCC |[M:6/8] z B,B, z CC |[M:9/8] z B,B, CC/C/C CCC |$ 
            [M:6/8]!mf! z B,B, z A,A, | z B,B, z B,B, |!f! z CC z C/C/C |!>(! z B,B, z B,!>)!B, | 
            z!mf! B,B, z CC | z B,B, z B,B, |$ z B,B, z B,B, | z A,/A,/A, A,A,A, | z B,B, z B,B, | z CC z CC | 
            z B,B, z B,B, |$ z B,/B,/B, B,B,B, | z!mf! B,B, z CC | z B,/B,/B, B,B,B, | z B,B, z CC | 
            z C/C/C CCC | z B,B, z B,B, |$ z B,B, z B,B, | z CC z CC | z B,/B,/B, B,B,B, |!f! z B,B, z CC | 
            [M:9/8] z B,B, CC/C/C CCC |$[M:6/8] z B,B, z CC |[M:9/8] z B,B, CC/C/C CCC | 
            [M:6/8]!mf! z B,B, z A,A, | z B,B, z B,B, |!f! z CC z C/C/C |$!>(! z B,B, z B,!>)!B, | 
            z!mf! B,B, z CC | z B,B, z B,B, | z B,B, z B,B, | z A,/A,/A, A,A,A, | z B,B, z B,B, | z CC z CC |$ 
            z A,A, z A,A, | z B,/B,/B, B,B,B, | z B,B, z CC | z B,/B,/B, B,B,B, | z B,B, z CC | z C/C/C CCC | 
            z B,B, z B,B, |$ z B,B, z B,B, | z CC z CC | z B,/B,/B, B,B,B, ||!f! z B,B, z CC | 
            [M:9/8] z B,B, CC/C/C CCC |$[M:6/8] z B,B, z CC |[M:9/8] z B,B, CC/C/C CCC | 
            [M:6/8]!mf! z B,B, z A,A, | z B,B, z B,B, |$!<(! z C/C/C C2!<)! z |!f! B,B,/B,/B, B,B,B, | 
            B,B,/B,/B, B,B,B, | B, z z ^A, z z |!ff! !fermata!B,6 |] 
            V:8
            [K:D]!f! def edB |[M:9/8] cB>F AA/A/A AAA |[M:6/8] def edB |[M:9/8] cA>F BB/B/B BBB |$[M:6/8] z6 | 
            z6 |!f! G3 E2 D |!>(! D3- D2!>)! z | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | 
            z!mf! A/A/A AAA | z6 | z B/B/B BBB | z6 |$ z6 | A3 A3 | AA/A/A AAA |!f! def edB | 
            [M:9/8] cB>F AA/A/A AAA |$[M:6/8] def edB |[M:9/8] cA>F BB/B/B BBB |[M:6/8] z6 | z6 |!f! G3 E2 D |$ 
            !>(! D3- D2!>)! z |!mf! (ABA) (GFE) | D3 A,3 | DFd cB>F | A3- A3 | (BcB) (AGF) | E3 B,3 |$ 
            CB,A, AD>E | F3- F3 | z6 | z!mf! A/A/A AAA | z6 | z B/B/B BBB | dcB A3 |$ BAG F3 | CB,A, E3 | 
            D3- D3 ||!f! def edB |[M:9/8] cB>F AA/A/A AAA |$[M:6/8] def edB |[M:9/8] cA>F BB/B/B BBB | 
            [M:6/8]!mf! (AGF E3) | (cBA F3) |$!<(! A3 A2!<)! A |!f! dd/d/d ddd | dd/d/d ddd | d z z d z z | 
            !ff! !fermata!d6 |] 
            V:9
            [K:D]!f! ABd cBF |[M:9/8] AG>C FF/F/F FFF |[M:6/8] ABd cBF |[M:9/8] AF>C GG/G/G GGG |$[M:6/8] z6 | 
            z6 |!f! E3 C2 D |!>(! D3- D2!>)! z | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | 
            z!mf! F/F/F FFF | z6 | z G/G/G GGG | z6 |$ z6 | E3 E3 | FF/F/F FFF |!f! ABd cBF | 
            [M:9/8] AG>C FF/F/F FFF |$[M:6/8] ABd cBF |[M:9/8] AF>C GG/G/G GGG |[M:6/8] z6 | z6 |!f! E3 C2 D |$ 
            !>(! D3- D2!>)! z | z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z!mf! F/F/F FFF | z6 | 
            z G/G/G GGG | dcB A3 |$ BAG F3 | CB,A, E3 | D3- D3 ||!f! ABd cBF |[M:9/8] AG>C FF/F/F FFF |$ 
            [M:6/8] ABd cBF |[M:9/8] AF>C GG/G/G GGG |[M:6/8]!mf! (AGF E3) | (cBA F3) |$!<(! E3 E2!<)! F | 
            !f! AA/A/A AAA | AA/A/A AAA | A z z _B z z |!ff! !fermata!A6 |] 
            V:10
            !f! G,3 A,3 |[M:9/8] G,3 B,A,G, F,E,D, |[M:6/8] G,3 A,3 |[M:9/8] G,3 A,G,F, E,D,C, |$ 
            [M:6/8]!mf! G,3 (D,G,A, | B,3) E,G,A, |!f! A,3 G,3 |!>(! G,3- G,2!>)! z |!mf! (G,A,G,) (F,E,D,) | 
            C,3 G,,3 |$ C,E,C B,A,>E, | G,3- G,3 | (A,B,A,) (G,F,E,) | D,3 A,,3 | B,,A,,G,, G,C,>D, |$ 
            E,3- E,3 |!mf! G,3 G,3 | G,3- G,3 | A,3 A,3 | A,3- A,3 | (CB,A, G,3) |$ (A,G,F, E,3) | 
            (B,,A,,G,, E,3) | G,G,/G,/G, G,G,G, |!f! G,3 A,3 |[M:9/8] G,3 B,A,G, F,E,D, |$[M:6/8] G,3 A,3 | 
            [M:9/8] G,3 A,G,F, E,D,C, |[M:6/8]!mf! G,3 (D,G,A, | B,3) E,G,A, |!f! A,3 G,3 |$ 
            !>(! G,3- G,2!>)! z | z6 |!mf! (G,A,G, F,E,D, | C,3 G,,3) | (G,A,G, F,E,D, | A,3 G,3) | 
            A,B,A, A,G,A, |$ B,3- B,3 | E,G,B, DB,G, |!mf! G,3 G,3 | G,3- G,3 | A,3 A,3 | A,3- A,3 | 
            z3 G,,C,D, |$ E,3 E,A,C | B,A,G, D,F,>E, | E,3- E,3 ||!f! G,3 A,3 |[M:9/8] G,3 B,A,G, F,E,D, |$ 
            [M:6/8] G,3 A,3 |[M:9/8] G,3 A,G,F, E,D,C, |[M:6/8]!mf! G,3 D,G,A, | B,3 E,G,A, |$ 
            !<(! G,3 G,2!<)! z |!f! G,G,/G,/G, CG,E, | G,G,/G,/G, CG,E, | G, z z _A, z z |!ff! !fermata!G,6 |] 
            V:11
            !f! E,3 F,3 |[M:9/8] E,3 B,A,G, F,E,D, |[M:6/8] E,3 F,3 |[M:9/8] E,3 A,G,F, E,D,C, |$ 
            [M:6/8]!mf! G,3 (D,G,A, | B,3) E,G,A, |!f! F,3 F,3 |!>(! E,3- E,2!>)! z |!mf! (G,A,G,) (F,E,D,) | 
            C,3 G,,3 |$ C,E,C B,A,>E, | G,3- G,3 | (A,B,A,) (G,F,E,) | D,3 A,,3 | B,,A,,G,, G,C,>D, |$ 
            E,3- E,3 |!mf! E,3 F,3 | E,3- E,3 | E,3 F,3 | F,3- F,3 | (CB,A, G,3) |$ (A,G,F, E,3) | 
            (B,,A,,G,, E,3) | E,E,/E,/E, E,E,E, |!f! E,3 F,3 |[M:9/8] E,3 B,A,G, F,E,D, |$[M:6/8] E,3 F,3 | 
            [M:9/8] E,3 A,G,F, E,D,C, |[M:6/8]!mf! G,3 (D,G,A, | B,3) E,G,A, |!f! F,3 F,3 |$ 
            !>(! E,3- E,2!>)! z | z6 |!mf! (G,A,G, F,E,D, | C,3 G,,3) | (G,A,G, F,E,D, | A,3 G,3) | 
            A,B,A, A,G,A, |$ B,3- B,3 | E,G,B, DB,G, |!mf! E,3 F,3 | E,3- E,3 | A,3 A,3 | A,3 A,3 | 
            z3 G,,C,D, |$ E,3 E,A,C | B,A,G, D,F,>E, | E,3- E,3 ||!f! E,3 F,3 |[M:9/8] E,3 B,A,G, F,E,D, |$ 
            [M:6/8] E,3 F,3 |[M:9/8] E,3 A,G,F, E,D,C, |[M:6/8]!mf! G,3 D,G,A, | B,3 E,G,A, |$ 
            !<(! F,3 F,2!<)! z |!f! E,E,/E,/E, G,E,C, | E,E,/E,/E, G,E,C, | E, z z _E, z z | 
            !ff! !fermata!E,6 |] 
            V:12
            !f! C,3 D,3 |[M:9/8] G,3 B,A,G, F,E,D, |[M:6/8] C,3 D,3 |[M:9/8] G,3 A,G,F, E,D,C, |$ 
            [M:6/8]!mf! G,3 (D,G,A, | B,3) E,G,A, |!f! B,3 G,2 G, |!>(! C3- C2!>)! z |!mf! (G,A,G,) (F,E,D,) | 
            C,3 G,,3 |$ C,E,C B,A,>E, | G,3- G,3 | (A,B,A,) (G,F,E,) | D,3 A,,3 | B,,A,,G,, G,C,>D, |$ 
            E,3- E,3 |!mf! (G,A,G,) (F,E,D,) | C,3 G,,3 | C,E,C B,D>C | A,3- A,3 | (CB,A, G,3) |$ 
            (A,G,F, E,3) | (B,,A,,G,, E,3) | C,3- C,3 |!f! C,3 D,3 |[M:9/8] G,3 B,A,G, F,E,D, |$ 
            [M:6/8] C,3 D,3 |[M:9/8] G,3 A,G,F, E,D,C, |[M:6/8]!mf! G,3 (D,G,A, | B,3) E,G,A, |!f! D3 B,2 C |$ 
            !>(! C3- C2!>)! z | z6 |!mf! (G,A,G, F,E,D, | C,3 G,,3) | (G,A,G, F,E,D, | A,3 G,3) | 
            A,B,A, A,G,A, |$ B,3- B,3 | E,G,B, DB,G, | E,3 F,3 | E,3- E,3 | E,3 F,3 | A,3- A,3 | z3 G,,C,D, |$ 
            E,3 E,A,C | B,A,G, D,F,>E, | E,3- E,3 ||!f! C,3 D,3 |[M:9/8] G,3 B,A,G, F,E,D, |$[M:6/8] C,3 D,3 | 
            [M:9/8] G,3 A,G,F, E,D,C, |[M:6/8]!mf! G,3 D,G,A, | B,3 E,G,A, |$!<(! D3 B,2!<)! C | 
            !f! CC/C/C CG,E, | CC/C/C CG,E, | C z z C z z |!ff! !fermata!C,6 |] 
            V:13
            !f! C,,3 A,,,3 |[M:9/8] E,,3 G,,3- G,,3 |[M:6/8] C,3 A,,3 |[M:9/8] E,,3 F,,3- F,,3 |$ 
            [M:6/8]!mf! C,, z z G,, z z | E,, z z A,,, z z |!f! D,,3 C,,3 |!>(! C, z z G,, z!>)! z | 
            !mf! C, z z G,, z z | C,, z z G,, z z |$ A,, z z E,, z z | G,,3 G,,F,,D,, | A,, z z E,, z z | 
            D,, z z A,, z z | G,, z z D,, z z |$ E,, z z G,, z z |!mf! C, z z G,, z z | C,, z z G,, z z | 
            A,, z z D,, z z | A,, z z A,,F,,D,, | C,, z z G,, z z |$ A,, z z E,, z z | G,,3 G,,3 | 
            C,G,,E,, C,, z z |!f! C,3 A,,3 |[M:9/8] E,,3 G,,3- G,,3 |$[M:6/8] C,3 A,,3 | 
            [M:9/8] E,,3 F,,3- F,,3 |[M:6/8]!mf! C,, z z G,, z z | E,, z z A,,, z z |!f! D,,3 G,,3 |$ 
            !>(! C,G,,E,, C,, z!>)! z |!mf! C, z z G,, z z | C,, z z G,, z z | A,, z z E,, z z | 
            G,, z z D,, z z | A,, z z E,, z z | D,, z z A,, z z |$ (G,,3 D,,3) | (E,,3 G,,3) | 
            C, z z G,, z z | C,, z z G,, z z | A,, z z D,, z z | A,, z z A,,F,,D,, | C,, z z G,, z z |$ 
            A,, z z E,, z z | G,,3- G,,3- | C,G,,E,, C,, z z ||!f! C,,3 A,,,3 |[M:9/8] E,,3 G,,3- G,,3 |$ 
            [M:6/8] C,3 A,,3 |[M:9/8] E,,3 F,,3- F,,3 |[M:6/8]!mf! C,, z z G,, z z | E,, z z G,, z z |$ 
            !<(! G,,3!<)! G,,3 |!f! C,C,/C,/C, C,G,,E,, | C,C,/C,/C, C,G,,E,, | C, z z C, z z | 
            !ff! !fermata!C,,6 |] 
            V:14
            !f! z EE z EE |[M:9/8] z EE z E/E/E EEE |[M:6/8] z EE z EE |[M:9/8] z EE z E/E/E EEE |$ 
            [M:6/8]!mf! z EE z EE | z EE z EE |!f! z EE z E/E/E |!>(! z EE z E!>)!E |!mf! z EE z EE | 
            z EE z EE |$ z EE z EE | z E/E/E EEE | z EE z EE | z EE z EE | z EE z EE |$ z E/E/E EEE | 
            !mf! z EE z EE | z E/E/E EEE | z EE z EE | z E/E/E EEE | z EE z EE |$ z EE z EE | z EE z EE | 
            z E/E/E E/E/E/E/E/E/ |!f! z EE z EE |[M:9/8] z EE z E/E/E EEE |$[M:6/8] z EE z EE | 
            [M:9/8] z EE z E/E/E EEE |[M:6/8]!mf! z EE z EE | z EE z EE |!f! z EE z E/E/E |$ 
            !>(! z EE z E!>)!E | z!mf! EE z EE | z EE z EE | z EE z EE | z E/E/E EEE | z EE z EE | z EE z EE |$ 
            z EE z EE | z E/E/E EEE | z EE z EE | z E/E/E EEE | z EE z EE | z E/E/E EEE | z EE z EE |$ 
            z EE z EE | z EE z EE | z E/E/E E/E/E/E/E/E/ ||!f! z EE z EE |[M:9/8] z EE z E/E/E EEE |$ 
            [M:6/8] z EE z EE |[M:9/8] z EE z E/E/E EEE |[M:6/8]!mf! z EE z EE | z EE z EE |$ 
            !<(! z E/E/E!<)! E3 |!f! z E/E/E z3 | z E/E/E z3 | E z z E z z |!ff! !///!!fermata!E6 |] 
            V:15
            !f! E3 E3 |[M:9/8] E3 E3 E3 |[M:6/8] E3 E3 |[M:9/8] E3 E3 E3 |$[M:6/8]!mf! E3 E3 | E3 E3 | 
            !f! E3 E3 |!>(! E3!>)! E3 |!mf! E3 E3 | E3 E3 |$ E3 E3 | E3 E3 | E3 E3 | E3 E3 | E3 E3 |$ E3 E3 | 
            !mf! E3 E3 | E3 E3 | E3 E3 | E3 E3 | E3 E3 |$ E3 E3 | E3 E3 | E3 z3 |!f! E3 E3 |[M:9/8] E3 E3 E3 |$ 
            [M:6/8] E3 E3 |[M:9/8] E3 E3 E3 |[M:6/8]!mf! E3 E3 | E3 E3 |!f! E3 E3 |$!>(! E3!>)! E3 | 
            !mf! E3 E3 | E3 E3 | E3 E3 | E3 E3 | E3 E3 | E3 E3 |$ E3 E3 | E3 E3 | E3 E3 | E3 E3 | E3 E3 | 
            E3 E3 | E3 E3 |$ E3 E3 | E3 E3 | E3 z3 ||!f! E3 E3 |[M:9/8] E3 E3 E3 |$[M:6/8] E3 E3 | 
            [M:9/8] E3 E3 E3 |[M:6/8]!mf! E3 E3 | E3 E3 |$!<(! E3!<)! E3 |!f! E3 z3 | E3 z3 | E3 E3 | 
            !ff! !///!!fermata!E6 |] 
            V:16
            !f! E3 z3 |[M:9/8] z9 |[M:6/8] E3 z3 |[M:9/8] z9 |$[M:6/8] z6 | z6 |!f! E3 z3 | z6 | z6 | z6 |$ 
            z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 |!f! E3 z3 |[M:9/8] z9 |$ 
            [M:6/8] E3 z3 |[M:9/8] z9 |[M:6/8] z6 | z6 |!f! E3 z3 |$ z6 | z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | 
            z6 | z6 | z6 | z6 | z6 | z6 |$ z6 | z6 | z6 ||!f! E3 z3 |[M:9/8] z9 |$[M:6/8] E3 z3 |[M:9/8] z9 | 
            [M:6/8] z6 | z6 |$!<(! E3!<)! E3 |!f! E3 z3 | E3 z3 | E3 E3 |!ff! !///!!fermata!E6 |] 
`


export {abcStr1, abcStr2, abcStr3, abcStr4, abcStr5,abcStr6}