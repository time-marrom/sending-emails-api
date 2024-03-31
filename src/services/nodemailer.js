import "dotenv/config"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

export function volunteerConfirmation(to, name) {
  transporter.sendMail({
    from: "Equipe da Simulação do Pipoca Ágil <contato@pipocaagil.com>",
    to,
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
  })
}

export function mentorConfirmation(to, name) {
  transporter.sendMail({
    from: "Equipe da Simulação do Pipoca Ágil <contato@pipocaagil.com>",
    to,
    subject: "Inscrição na inciativa “Simulação de Projetos Ágeis” confirmada!",
    html: `
      <p>Olá, ${name}!</p>
      <p>Ficamos felizes em saber que você se inscreveu com sucesso para fazer parte da mentoria da Simulação!</p>
      <p>Para ajudar as pessoas é importante que você entre no grupo de WhatsApp destinado às pessoas mentoras. Assim que entrar no grupo se apresente e fale sua área de atuação. </p>
      <p>Clique <a href="https://chat.whatsapp.com/DnC5mWcCDg85JkTQmdogyL">aqui</a> para entrar no grupo.</p>
      <p>Caso tenha alguma dúvida, consulte nosso FAQ no <a href="https://pipoca-agil.netlify.app/">site da Simulação</a>.</p>
      <p>Abraços,</p>
      <p>Equipe da Simulação do Pipoca Ágil.</p>
    `
  })
}
