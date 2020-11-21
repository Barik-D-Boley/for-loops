/*Question 1*/
function Q1() {
    var a = 0;
    for(i = 1; i <= 1000; i++) {
        a += i;
    }
    return a;
}
Q1();

/*Question 2*/
function Q2() {
    var b = 0;
    for(i = 93; i <= 845; i += 2) {
        b += i;
    }
    return b;
}
Q2();

/*Question 3*/
function Q3() {
    var c = 1;
    for(i = 6; i <= 400; i += 6) {
        c *= i;
    }
    return c;
}
Q3();

/*Question 4*/
function Q4(d) {
    for(i = 2; i < d; i++) {
        if((d % i) === 0) {
            return "Not Prime";
        }
    }
    return "Prime";
}
Q4();

/*Question 5*/
function Q5() {
    for(e = 1; e <= 100; e++) {
        var notPrime = false;
        for(i = 2; i <= e; i++) {
            if(e % i === 0 && i !== e) {
                notPrime = true;
            } 
        }
        if (notPrime === false) {
            console.log(e);
        } 
    }
}
Q5();

/*Question 6*/
function Q6(f) {
    var fact = f;
    for(i = 1; i < f; i++) {
        f--;
        fact = fact * f;
    }
    return fact;
}
Q6();

/*Question 7*/
function Q7(g1, g2) {
    for(i = 1; i < g1 || i < g2; i++) {
        if(g1%i === 0 && g2%i === 0){
            g3 = i
        }
    }
    return g3
}
Q7();

/*Question 8*/
function Q8(h) {
    for(i = 0; i <= h; i++) {
        for(j = 0; j < i; j++) {
            console.log("*");
        }
        console.log("");
    }
}
Q8();

/*Question 9*/
function Q9(k) {
    for(i = 0; i <= k; i++) {
        for(j = 0; j < i; j++) {
            console.log("*");
        }
        console.log("");
    }
    for(i = k - 1; i > 0; i--) {
        for(j = 0; j < i; j++) {
            console.log("*");
        }
        console.log("");
    }
}
Q9();

/*Question 10*/
function Q10(l) {
    var l1 = 0;
    var l2 = 0;
    for(i = 1; i <= l; i++) {
        l2 = l2 + i;
        l1 = l2 + l1;
    }
    return l1;
}
Q10();

/*Question 11*/
function Q11(m) {
    var m1 = 0;
    var m2 = 1;
    var m3 = 1;
    console.log(m1);
    console.log(m2);
    for(i = 3; i <= m; i++) {
        m3 = m2 + m1;
        m1 = m2;
        m2 = m3;
        console.log(m3);
    }
}
Q11();