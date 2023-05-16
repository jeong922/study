export default class Table {
  constructor(data, $target) {
    this.data = data;
    this.$target = $target;
    this.render();
    this.setEvent();
  }

  displayTableHead = () => {
    return `
		 <thead>
          <tr>
            <th>No</th>
            <th>FAQ 제목</th>
            <th>카테고리</th>
            <th>날짜</th>
            <th>Hit</th>
          </tr>
        </thead>
		`;
  };

  displayTableBody = (data) => {
    const total = data.map((v) => v.hit).reduce((acc, cur) => acc + cur, 0);
    return `
		<tbody>
		${data
      .map(
        (item) =>
          `<tr class='tbody_tr'>
        <td>${item.id}</td>
        <td class='td_text'>
          <div>
            <p class='text' data-check="${item.id}">${item.text}</p>
            <div class='answer' data-des="${item.id}">
              <p>${item.answer}</p>
            </div>
          </div>
        </td>
        <td>${item.category}</td>
        <td>${item.date}</td>
        <td>${item.hit}</td>
      </tr>`
      )
      .join('')}
			 <tr class="total">
            <td colspan="4">자주 묻는 질문 총 합계</td>
            <td class="total_count">${total}</td>
      </tr>     
		</tbody>
		`;
  };

  render() {
    const table = document.createElement('table');
    const thead = this.displayTableHead();
    const tbody = document.createElement('tbody');
    const tableData = this.displayTableBody(this.data);
    table.innerHTML = thead;
    tbody.innerHTML = tableData;
    table.appendChild(tbody);
    this.$target.appendChild(table);
  }

  setEvent = () => {
    document.querySelector('tbody').addEventListener('click', (e) => {
      const id = e.target.dataset.check;
      // const text = document.querySelector(`.text[data-check="${id}"]`);
      const answer = document.querySelector(`.answer[data-des="${id}"]`);
      if (id) {
        answer.classList.toggle('active');
      }
    });
  };
}
