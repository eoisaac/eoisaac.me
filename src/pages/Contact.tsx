import { zodResolver } from '@hookform/resolvers/zod'
import { PaperPlaneRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import { TextField } from '../components/TextField'
import { Toast } from '../components/Toast'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'

export const Contact = () => {
  const ContactFormSchema = zod.object({
    name: zod.string().min(2, { message: 'Insira um nome válido!' }),
    email: zod.string().email({ message: 'Formato de email inválido!' }),
    message: zod
      .string()
      .min(2, { message: 'A mensagem não pode estar vazia!' }),
  })

  type ContactFormFormData = zod.infer<typeof ContactFormSchema>

  const ContactForm = useForm<ContactFormFormData>({
    resolver: zodResolver(ContactFormSchema),
  })

  const { formState, register, handleSubmit, reset } = ContactForm
  const { errors } = formState

  const handleContactSubmit = ({
    name,
    email,
    message,
  }: ContactFormFormData) => {
    const formattedMessage = `
      Contact form:
      *At:* ${Date.now()}
      *Name:* ${name}
      *Email:* ${email}
      *Message:* ${message}
    `
    // sendMessage(formattedMessage)

    reset()
  }

  return (
    <BasePage heading="Get in touch">
      <BaseSection heading="Get in touch with me" srHeading>
        <p>
          Quer me dizer &quot;Oi!&quot;? Tem algo que gostaria de perguntar?
          Algum novo projeto ou oportunidade?
        </p>
        <div className="my-auto">
          <form
            onSubmit={handleSubmit(handleContactSubmit)}
            className="flex flex-col items-center gap-2 sm:max-w-xs"
          >
            <InputField
              label="Name"
              register={register('name', { required: true })}
              errorMessage={errors.name && errors.name.message}
            />
            <InputField
              label="Email"
              register={register('email', { required: true })}
              errorMessage={errors.email && errors.email.message}
            />
            <TextField
              label="Message"
              register={register('message', { required: true })}
              errorMessage={errors.message && errors.message.message}
            />
            <Button
              label="Send"
              type="submit"
              className="mt-3 w-full justify-center"
              icon={<PaperPlaneRight weight="bold" />}
            />
          </form>
        </div>
      </BaseSection>
      <Toast
        display={true}
        heading="Mensagem enviada!"
        message="Sua mensagem foi enviada com sucesso!"
        variant="SUCCESS"
      />
    </BasePage>
  )
}
