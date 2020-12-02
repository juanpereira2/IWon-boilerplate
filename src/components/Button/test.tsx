import { render, screen } from '@testing-library/react'
import { interopDefault } from 'next/dist/next-server/server/load-components'

import Button from '.'

describe('<Button>', () => {
    it('should render the heading', () => {
    const { container } = render(
    <Button />)
    //esperar que tenha um "react avançado" no heading
    expect(
    screen.getByRole('heading', { name: /Button/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
    })


    })