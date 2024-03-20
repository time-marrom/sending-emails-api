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
    text: `Olá, ${name}!,

    Ficamos felizes em saber que você se inscreveu com sucesso para fazer parte do voluntariado na Simulação!

    É importante relembrar que a sua inscrição na inciativa não garante que você irá participar de um time.

    Para fazer parte de um time, é necessário que você indique sua disponibilidade de horários e o cargo desejado no grupo de espera do WhatsApp da Simulação. Dessa forma, quando surgir uma vaga em algum grupo, você poderá ser chamado.

    Clique aqui -> colocar esse link (https://chat.whatsapp.com/DzBzrELMVNZ14JaCjXOfBK) para entrar no grupo.

    Caso tenha alguma dúvida, consulte nosso FAQ no site da Simulação. -> colocar esse link na frase "site da simulação" (https://pipoca-agil.netlify.app/)

    Abraços,

    Equipe da Simulação.`
  })
}
