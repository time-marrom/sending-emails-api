import "dotenv/config"
import { google } from "googleapis"
import nodemailer from "nodemailer"

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const REDIRECT_URI = process.env.REDIRECT_URI
const GMAIL = process.env.GMAIL
const PIPOCA = process.env.PIPOCA

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

export async function volunteerConfirmation(to, name) {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken()
  const smtp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN
    },
    tls: {
      rejectUnauthorized: true
    },
    envelope: {
      to: to,
      from: `Equipe da Simulação do Pipoca Ágil <${GMAIL}>`
    }
  })

  const mailOptions = {
    from: `Equipe da Simulação do Pipoca Ágil <${GMAIL}>`,
    to: to,
    subject: "Inscrição na inciativa “Simulação de Projetos Ágeis” confirmada!",
    html: `
      <p>Olá, ${name}!</p>
      <p>Ficamos felizes em saber que você se inscreveu com sucesso para fazer parte do voluntariado na Simulação!</p>
      <p>É importante relembrar que a sua inscrição na inciativa não garante que você irá participar de um time.</p>
      <p>Para fazer parte de um time, é necessário que você indique sua disponibilidade de horários e o cargo desejado no grupo de espera do WhatsApp da Simulação. Dessa forma, quando surgir uma vaga em algum grupo, você poderá ser chamado.</p>
      <p>Clique <a href="https://chat.whatsapp.com/DzBzrELMVNZ14JaCjXOfBK">aqui</a> para entrar no grupo.</p>
      <p>Caso tenha alguma dúvida, consulte nosso FAQ no <a href="https://pipoca-agil.netlify.app/">site da Simulação</a>.</p>
      <p>Abraços,</p>
      <p>Equipe da Simulação.</p>
    `
  }

  return new Promise((resolve, reject) => {
    smtp.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

export async function mentorConfirmation(to, name) {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken()
  const smtp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN
    },
    tls: {
      rejectUnauthorized: true
    },
    envelope: {
      to: to,
      from: `Equipe da Simulação do Pipoca Ágil <${GMAIL}>`
    }
  })

  const mailOptions = {
    from: `Equipe da Simulação do Pipoca Ágil <${GMAIL}>`,
    to: to,
    subject: "Inscrição na inciativa “Simulação de Projetos Ágeis” confirmada!",
    html: `
      <p>Olá, ${name}!</p>
      <p>Ficamos felizes em saber que você se inscreveu com sucesso para fazer parte da mentoria da Simulação!</p>
      <p>Para ajudar as pessoas é importante que você entre no grupo de WhatsApp destinado às pessoas mentoras. Assim que entrar no grupo se apresente e fale sua área de atuação. </p>
      <p>Clique <a href="https://chat.whatsapp.com/DnC5mWcCDg85JkTQmdogyL">aqui</a> para entrar no grupo.</p>
      <p>Caso tenha alguma dúvida, consulte nosso FAQ no <a href="https://pipoca-agil.netlify.app/">site da Simulação</a>.</p>
      <p>Abraços,</p>
      <p>Equipe da Simulação.</p>
    `
  }

  return new Promise((resolve, reject) => {
    smtp.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

export async function certificate(data) {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken()
  const smtp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN
    },
    tls: {
      rejectUnauthorized: true
    },
    envelope: {
      to: PIPOCA,
      from: GMAIL
    }
  })

  const mailOptions = {
    to: PIPOCA,
    from: GMAIL,
    subject: `Solicitação de certificado - ${data.fullName}`,
    html: `
      <p>Olá! ${data.fullName} solicitou o certificado de participação.</p>
      <p>Segue abaixo os dados:</p>
      <p>Nome completo: ${data.fullName}</p>
      <p>E-mail: ${data.email}</p>
      <p>Função: ${data.office}</p>
      <p>Cargo: ${data.role}</p>
      <p>Data: ${data.date}</p>
    `
  }

  return new Promise((resolve, reject) => {
    smtp.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

export async function contact(data) {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken()
  const smtp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN
    },
    tls: {
      rejectUnauthorized: true
    },
    envelope: {
      to: PIPOCA,
      from: GMAIL
    }
  })

  const mailOptions = {
    to: PIPOCA,
    from: GMAIL,
    subject: `Contato - ${data.name}`,
    html: `
      <p>Olá! ${data.name} entrou em contato.</p>
      <p>Segue abaixo os dados:</p>
      <p>Nome: ${data.name}</p>
      <p>Prefere ser contatado por: ${data.contactWith}</p>
      <p>E-mail: ${data.email}</p>
      <p>WhatsApp: ${data.whatsApp}</p>
      <p>Assunto: ${data.subject}</p>
      <p>Mensagem: ${data.message}</p>
    `
  }

  return new Promise((resolve, reject) => {
    smtp.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}
