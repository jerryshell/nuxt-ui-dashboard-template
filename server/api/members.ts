const members = [
  {
    name: "安东尼·傅",
    username: "antfu",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu" },
  },
  {
    name: "巴普蒂斯特·勒普鲁",
    username: "larbish",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/larbish" },
  },
  {
    name: "本杰明·卡纳克",
    username: "benjamincanac",
    role: "owner",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/benjamincanac" },
  },
  {
    name: "席琳·杜梅克",
    username: "celinedumerc",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/celinedumerc" },
  },
  {
    name: "丹尼尔·罗",
    username: "danielroe",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe" },
  },
  {
    name: "法纳巴兹",
    username: "farnabaz",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/farnabaz" },
  },
  {
    name: "费迪南·库莫",
    username: "FerdinandCoumau",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/FerdinandCoumau" },
  },
  {
    name: "雨果·理查德",
    username: "hugorcd",
    role: "owner",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/hugorcd" },
  },
  {
    name: "普亚·帕尔萨",
    username: "pi0",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0" },
  },
  {
    name: "萨拉·莫里索",
    username: "SarahM19",
    role: "member",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/SarahM19" },
  },
  {
    name: "塞巴斯蒂安·肖潘",
    username: "Atinux",
    role: "owner",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux" },
  },
];

export default eventHandler(async () => {
  return members;
});
