// Adequa = Adequa || {};
Adequa.notifications = [];
Adequa.notificationCurrentIndex = 0;

const notificationContainer = document.createElement('div');
notificationContainer.innerHTML = '<span class="adequa-notif-nav" style="position: absolute; left: 0;top:0;bottom: 0; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0 5px;"><svg viewBox="0 0 32 32" aria-hidden="true" style="height: 30px"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg></span><span class="adequa-notif-nav" style="position: absolute; right: 0;top:0;bottom: 0; display: flex; cursor: pointer; align-items: center; justify-content: center; padding: 0 5px"><svg viewBox="0 0 32 32" aria-hidden="true" style="height: 30px"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg></span><span class="adequa-notif-nav" style="position: absolute; top: 5px; right: 5px; height: 20px; width: 20px; cursor: pointer"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg></span>';

notificationContainer.addEventListener('click', (e)=>e.stopPropagation());
notificationContainer.querySelector('span:first-child').addEventListener('click', function (e) {
    e.stopPropagation();
    if (Adequa.notificationCurrentIndex <= 0) {
        Adequa.notifications[0].element.style.display = "none";
        Adequa.notificationCurrentIndex = Adequa.notifications.length - 1;
        Adequa.notifications[Adequa.notificationCurrentIndex].element.style.display = "flex";
        return;
    }

    Adequa.notifications[Adequa.notificationCurrentIndex].element.style.display = "none";
    Adequa.notificationCurrentIndex--;
    Adequa.notifications[Adequa.notificationCurrentIndex].element.style.display = "flex";
});
notificationContainer.querySelector('span:nth-child(2)').addEventListener('click', function (e) {
    e.stopPropagation();
    if (Adequa.notifications.length - 1 <= Adequa.notificationCurrentIndex) {
        Adequa.notifications[Adequa.notifications.length - 1].element.style.display = "none";
        Adequa.notificationCurrentIndex = 0;
        Adequa.notifications[Adequa.notificationCurrentIndex].element.style.display = "flex";
        return;
    }

    Adequa.notifications[Adequa.notificationCurrentIndex].element.style.display = "none";
    Adequa.notificationCurrentIndex++;
    Adequa.notifications[Adequa.notificationCurrentIndex].element.style.display = "flex";
});
notificationContainer.querySelector('span:last-child').addEventListener('click', function (e) {
    e.stopPropagation();
    Adequa.notifications = [];
    notificationContainer.style.display = 'none';
});

const style = document.createElement('style');

style.appendChild(document.createTextNode(".adequa-notif-nav svg{transition: fill 0.2s ease-in} .adequa-notif-nav:hover svg{fill: #f56b2a}"));


document.getElementsByTagName('head')[0].appendChild(style);

Object.assign(notificationContainer.style, {
    all: "initial",
    display: "none",
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: "2147483645",
    height: "120px",
    width: "440px",
    boxSizing: "border-box",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "1px 1px 8px 1px #cad1d9",
    fontFamily: "OpenSans, sans-serif"
});


Adequa.notify = function ({title, text, link, other_info, timeout, image}) {
    const notification = document.createElement('div');
    notification.innerHTML = `
<figure style="all: initial;height: 90px;width:90px; margin: 0 15px 0 0; min-width: 90px;border-radius: 5px;">
    <img style="all: initial;width: 100%;height: 100%;object-fit: cover; border-radius: 5px;"/>
</figure>
<div style="all: initial;display: flex;flex-direction: column;justify-content: space-between;flex: 1;height: 100px;">
    <div style="all:initial; display: flex; flex-direction: column">
        <h3 style="all: initial; font-family: OpenSans, sans-serif;font-weight: bold;"></h3>
        <span style="all: initial;font-family: OpenSans, sans-serif; color: #f56b2a"></span>
    </div>
    <p style="all: initial;font-family: OpenSans, sans-serif;white-space: pre-wrap;"></p>
</div>
<a target="_blank"></a>`;

    var bytes = new Uint8Array(image.binary.length);
    for (var i = 0; i < bytes.length; i++) {
        bytes[i] = image.binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], {type: image.mimeType});
    const imageUrl = URL.createObjectURL(blob);
    const img = notification.querySelector('img');
    img.addEventListener('load', () => URL.revokeObjectURL(imageUrl));
    img.src = imageUrl;

    notification.querySelector('h3').innerText = title;
    notification.querySelector('p').innerText = text;
    notification.querySelector('span').innerText = other_info ? other_info : '';

    if (link) {
        const showLink = notification.querySelector('a');
        showLink.addEventListener('click', (e)=>e.stopPropagation());
        showLink.href = link;

        Object.assign(showLink.style, {
            all: "initial",
            position: "absolute",
            width: "370px",
            height: "100%",
            zIndex: "2147483647",
            cursor: "pointer",
            fontFamily: "OpenSans, sans-serif"
        })
    }

    Object.assign(notification.style, {
        all: "initial",
        display: "none",
        alignItems: "center",
        padding: "5px",
        position: "absolute",
        margin: "0 30px",
        zIndex: "2147483646",
        height: "120px",
        width: "380px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "OpenSans, sans-serif"
    });
    if (Adequa.notifications.length === 0) notification.style.display = "flex";

    notificationContainer.insertAdjacentElement('beforeend', notification);

    Adequa.notifications.push({title, text, link, timeout, image, element: notification});

    const [left, right, _] = notificationContainer.querySelectorAll('span');
    if (Adequa.notifications.length === 1) {
        left.style.display = "none";
        right.style.display = "none";
    } else {
        left.style.display = "flex";
        right.style.display = "flex";
    }

    Object.assign(notificationContainer.style, {
        display: "block"
    });
};
document.body.insertAdjacentElement('beforeend', notificationContainer);
