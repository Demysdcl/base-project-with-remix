import { ErrorProps } from '~/types'
import { CollapsibleCard } from './CollapsibleCard'
import { Button } from './button'

export function ErrorFeedback({ error }: ErrorProps) {
  return (
    <div className="bg-red-100 border border-red-500 p-12">
      <span className="text-red-500 font-bold text-2xl mb-2 block">
        Ocorreu um erro na solicitação.
      </span>
      <CollapsibleCard
        title={<Button variant="outline">Informações do erro</Button>}
      >
        <div className="p-4 border border-red-500 rounded-md mt-4">
          <h1 className="text-xl font-bold border-red-500">Mensagem:</h1>
          <p className="border-red-500">
            {error?.message ?? 'Mensagem não providenciada'}
          </p>
          <p className="border-red-500 font-bold mt-4">Rastro do erro:</p>
          <pre className="border-red-500">
            {error?.stack ?? 'Rastro não providenciado'}
          </pre>
        </div>
      </CollapsibleCard>
    </div>
  )
}
