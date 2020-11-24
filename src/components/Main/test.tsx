import { render, screen } from '@testing-library/react'
import { interopDefault } from 'next/dist/next-server/server/load-components'

import Main from '.'
//renderizar main
describe('<Main>', () => {
    it('should render the heading', () => {
        const { container } = render(<Main />)
        //esperar que tenha um "react avançado" no heading
        expect(
            screen.getByRole('heading', { name: /react avançado/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

})
