function showContatoModal() {
    const modalHTML = `
    <div class="modal" id="contato-modal" tabindex="-1" aria-labelledby="contatoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="background-color: #fdf9f7;">
                <div class="modal-header" style="border-bottom: none; padding-bottom:0px;">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="padding-top:0px;">
                    <h2 class="d-flex justify-content-center fw-bold" style="color: #382D23;">Entre em contato!</h2>
                    <p class="message">Se você deseja compartilhar novas receitas, dar seu feedback sobre o site ou dizer sua experiência com alguma dessas receitas ou outras em geral, fique a disposição, segue meu email de contato: <a class="address" href="mailto:ryaneferreiraf@gmail.com">ryaneferreiraf@gmail.com</a></p>
                    <div class="mb-3">
                        <label for="email-body" class="form-label">Digite aqui:</label>
                        <textarea class="form-control" name="email-body" id="email-body"></textarea>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn rounded-pill" type="button" style="background-color: #FF9F62;">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Injetar no container
    const container = document.getElementById('componentes');
    container.innerHTML = modalHTML;

    const modal = document.getElementById('contato-modal');
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

function showSobreModal(path) {
    const modalHTML = `
    <div class="modal" id="sobre-modal" tabindex="-1" aria-labelledby="contatoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header" style="border-bottom: none; padding-bottom:0px;">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="padding-top:0px;">
                    <div class="row align-items-center">
                        <div class="col-4 d-flex justify-content-center">
                            <img src="${path}imagens/sobre-mim/perfil.jpg" alt="" class="img-fluid rounded-circle" style="width: 100px; height: 100px;">
                        </div>
                        <div class="col-8">
                            <div class="text-content">
                                <h2 class="fw-bold" style="font-size: 20px;">Ryane Ferreira Feitosa</h2>
                                <p style="font-size: 16px;">Oie? Bem vindos a minha cozinha, aqui tem algumas das minhas receitas favoritas! Não se enganem achando que consegui executar todas com sucesso, bom na primeira vez não... mas na terceira sim! Vocês conseguem! Acho que as primeiras dificuldades foram seguir as regras, porque no meio do processo eu ia no meu feeling (se for sua primeira vez fazendo a receita não recomendo sujeito a erros kk). Bom, espero que se aproveitem as gostosuras em sua tela!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Injetar no container
    const container = document.getElementById('componentes');
    container.innerHTML = modalHTML;

    const modal = document.getElementById('sobre-modal');
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}