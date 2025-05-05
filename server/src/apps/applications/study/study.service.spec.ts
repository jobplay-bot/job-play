import { getRepositoryToken } from '@mikro-orm/nestjs'
import { Test, TestingModule } from '@nestjs/testing'

import { Study } from './study.entity'
import { StudyService } from './study.service'


describe('StudyService', () => {
  let service: StudyService
  const fakeStudyRepository = {}

  const STUDY_REPOSITORY_TOKEN = getRepositoryToken(Study)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudyService,
        {
          provide: STUDY_REPOSITORY_TOKEN,
          useValue: fakeStudyRepository,
        },
      ],
    }).compile()

    service = module.get<StudyService>(StudyService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
