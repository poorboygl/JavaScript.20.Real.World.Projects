setInterval(()=>{
    d = new Date();
    hitem = d.getHours();
    mitem = d.getMinutes();
    sitem = d.getSeconds();

    hrotation = 30 * hitem + mitem / 2;
    mrotation = 6 * mitem;
    srotation = 6 * sitem;

    hour.style.transform = `translate(-50%, -100%) rotate(${hrotation}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${mrotation}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${srotation}deg)`;
    },1000 // This will keep the browser from going to sleep
)

//setInterval là một hàm trong JavaScript dùng để thực hiện một đoạn mã lặp đi lặp lại theo chu kỳ thời gian cố định.
//setInterval(function, delay);
//function	Hàm (hoặc đoạn mã) bạn muốn chạy lặp đi lặp lại
//delay	Thời gian (tính bằng mili giây) giữa các lần chạy hàm. Ví dụ, 1000 sẽ chạy hàm mỗi giây.