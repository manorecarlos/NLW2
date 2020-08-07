// Configurando o servidor
const express = require('express')
const server = express()

// Estruturando os dados dos professores
const proffys = [
    { 
        name: "May",
        avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBg4IBwgQEAkRFxEXEBgKFxsPFQ0WIBEiIiAdHx8kKCgsJCYlJx8fLTEtJSkrLi4uIyszODMsNygtLisBCgoKDQ0OEg4NFS0ZFRkrKystLS0rLSsrKys3LSsrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJYAyAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABgUHAQMEAv/EADsQAAIBAgQDBQUGAwkAAAAAAAABAgMRBAUGIRIxQQcTUWGBIlJxkcEUIyVCU6EVs9EmMjVEcnOSsbL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABsRAQEBAAMBAQAAAAAAAAAAAAABEQIxQSEy/9oADAMBAAIRAxEAPwDZIAOb1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYLH6vyTL6jhjcTOm03G86NRRk1zSfDZ+jM6TfaNwvRWM7yN7Rhw8W/C+9STXg1cQtsmxl8ozXA5zhPtWW4hVKN2m43Ti1zTTs0/ie00FpTUGM0rmsa0qcvs1RQdWD272m91JX6pO6fXddTe2BxdDH4SGLwlRToVEpRceUk/8Ap9GujLZjPHlsd4B1161LD0J18RUUKUE5SdTZQS3bb8CNOvH43DZdg54vHVlDDwV5OfJL6vwS3ZicFrHJMfPhwOIqVHdL7qjVkk3yTajZepBdpmLzDMctw2YVeKll06klh6c1wyqJU7qrNdHL8q6R35sqeyZJaOg0t3Vr3t1d0t/QufNZ225FmcAEaAAAAAAAAAAAAAAAAAAAAAAlO1Gp3eisT5uivnVT+hVkV2u1ODR0o+9Vor5Xf0E7Tl1XTmGkKWf6KwKpJQzGlQo9zJ7KadNNwb8HfZ9Hv4kjoTVFfS+ZzyzNlKOClNqoqnPC1OTlbw95evx2/lVPu8rw9O3KnRXypoke0bRyzmg8zy2n+IwXtKP+Ziun+pdPFbeBZfKzZn2LZTi4d4pLgte91a1r3vytbe5O0k9U4mNeovwKlK9JS2/iNRPabX6cWvZX5mrvZIlOz2hm+e5L/D8wm1kdObTvdVMQlzop/pp7y6/l8bbOhFQiowilFWSUdlFLkkuiHTUuzWvu2dfgmEfXvpfymZHsnTWjad/1a/8A6RiO2esnhMDhY7zlOrJKO7aUUlt5t2K7RmV1Mm01hsFWVq6i5VF7s5Ntr0vb0HiT9VmgARoAAAAAAAAAAAAAAAAAAAAACD7Y5f2dw9Jfnrx/anL+peGv+1v7ynllD3sR9EvqJ2nLqr6lHgpRj4KK+SSPo5a9ppeZqnX2uMVXxs8myGo400+CpOj/AH6072cYNclfa63b8uaTS2SfV7mepckyefcYvH041ukKV6k7vpwxTd2xDNcdjIcWXZRVs+Usxawsfjb2pv8A4oxWh9G4fIMNHFYuCnmslecpe13LfOMfPxfNvyK0pNvaewWmVLN1nOdV1icxVlT4Y8FHCpclCLbbau95O99+ZQgBZMAAQAAAAAAAAAAAAAAAAAAAAABJvkvka77TcTRWoMnoVasUo1eOpxbd3F1YJN+C2fyLjMcrwOaQjDMMNGpGN3FTbSi3s3s0Y2WjdNyd5ZNQb68V23+4iWWzH3rXNJZVpjFY3Dy+94eGm47pSm7Jp+V2/Q1V2W5fDHatpzqq8KEJ1d97yVkn83f0LjWuQZPlGma+NwGTYfvafd271OcYp1Em7XttfYl+xqSWocRFvd0Xb0qxuanTF/U1uALyB116NPE0J0K0eKlJNSTuuJPmttzLo7LP3RZ+BHat0xk2H01jMRhsEqdenTnOEqUpxcWt115eRE9l2W4XOc4rxzOMqtOnTUoxqTla7qJXaT3si56zbZcxudprmgeXLsuwWWUXRwGHjTpt3ahd3drX3bfQ9RGgAAAAAAAAAAAAAAAAAAAAAAAHjzfAU80yqvgKr9irCUG/dbWz9HZ+hpXR2Kqaa1rThmC4GpTo1+LZQvtf4Xs7+G5vYkta6Jw2pF9poTVLMUrKTV41UuSmlvt0a3Xmiys8pe4rfjzBCZLn+c6eoRy/VeWV5UoWjTr4SLxClFclK27suvPxXUz8NW5HUhxUcZKb6Rp0qk5vyso3uMWWPrWslDSOPcnt3NTn4tWX7s172Mf4zi/9mP8ANRmtT0tTawh9iy/LpYXKrpylj2qM67W6vFXaS5pW57vwO3s+0jmem83xFTHOnKjUpRjGVCXErqadmmk1sPGbuyr0AEbAAAAAAAAAAAAAAAAAAAAAAAAAAATa5P5HPE/FnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z",
        whatsapp: "21999999999",
        bio: "Professora de artes, desenho e inglês.",
        subject: "Artes",
        cost: "120",
        weekday: [0],
        time_from: [1000],
        time_to: [2000]
    },
    { 
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "21999999999",
        bio: "Entusiata das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida de pessoas através de experiências. Mais de 200 mil pessoas já passarem por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [1200],
        time_to: [2200]
    },
    { 
        name: "Renan Carlos",
        avatar: "https://avatars1.githubusercontent.com/u/62818671?s=460&u=649c624e53a72fa2ae9b735bb84c9214e7533c5e&v=4",
        whatsapp: "21999999999",
        bio: "fala comigo.",
        subject: "Matemática",
        cost: "50",
        weekday: [2],
        time_from: [1300],
        time_to: [2300]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades
function getSubjects(subjectNumber) {
    const arrayPosition = +subjectNumber -1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    // Se tiver dados
    const isNoEmpty = Object.keys(data).length > 0    
    if (isNoEmpty) {
        data.subject = getSubjects(data.subject)
        
        // Adicionar os dados à lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

// Configurando o nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/pages', {
    express: server,
    noCache: true,
})

// Configurando os arquivos estáticos (css, imagens, scripts...)
server.use(express.static("public"))

// Configurando as rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Start do servidor
.listen(5500)