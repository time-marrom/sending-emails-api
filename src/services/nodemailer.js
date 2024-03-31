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

export function send(to, name) {
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
