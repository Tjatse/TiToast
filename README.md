TiToast
=======

Android-like toast for titanium(Alloy)

How to use
=======

* Copy widget files into your project directory: [PROJECT]/app/widgets
* Add dependency to your project's config.json: `..."dependencies": { "net.beyondlink.toast": "1.0"}...`
* Import widget: `$.toast = Alloy.createWidget('net.beyondlink.toast');` and add view to window: `$.index.add($.toast.getView());`
* Call static `$.toast.info` | `$.toast.error` | `$.toast.success` | `$.toast.warning` for any toast message you wanna show, e.g.:`$.toast.info('Hellow, Toast!');`

Screenshots
=======
under `/screenshots` directory.

Problem?
=======
[Mail me](thisnamemeansnothing@gmail.com)
